## Commands & Directories [REFERENCE]

## ssh login attempt script directory

```
sudo nano /usr/local/bin/ssh-alert.sh
```

ssh-alert.sh

```
#!/bin/bash

# Set your Discord webhook URL here
WEBHOOK_URL=""

# Get information about the SSH attempt
USER=$(whoami)
IP=$(echo $SSH_CONNECTION | awk '{print $1}')
HOSTNAME=$(hostname)
TIME=$(date --iso-8601=seconds)

# Create the JSON payload
PAYLOAD="{
  \"username\": \"ssh-alerts\",
  \"embeds\": [{
    \"title\": \"🚨 SSH Login Attempt\",
    \"fields\": [
      {\"name\": \"User\", \"value\": \"$USER\", \"inline\": true},
      {\"name\": \"IP\", \"value\": \"$IP\", \"inline\": true},
      {\"name\": \"Host\", \"value\": \"$HOSTNAME\", \"inline\": true},
      {\"name\": \"Time\", \"value\": \"$TIME\", \"inline\": false}
    ],
    \"color\": 16711680
  }]
}"

# Send it to Discord
curl -H "Content-Type: application/json" -X POST -d "$PAYLOAD" $WEBHOOK_URL
```

## ssh login fail attempt script

```
#!/bin/bash

WEBHOOK_URL=""

tail -F /var/log/auth.log | while read line; do
  if echo "$line" | grep "Failed password" > /dev/null; then
    USER=$(echo $line | awk '{print $(NF-5)}')
    IP=$(echo $line | awk '{print $(NF-3)}' | tr -d ':')
    TIME=$(date --iso-8601=seconds)

    PAYLOAD="{
      \"username\": \"ssh-alerts\",
      \"embeds\": [{
        \"title\": \"🚨 SSH Invalid Login Attempt\",
        \"fields\": [
          {\"name\": \"User\", \"value\": \"$USER\", \"inline\": true},
          {\"name\": \"IP\", \"value\": \"$IP\", \"inline\": true},
          {\"name\": \"Time\", \"value\": \"$TIME\", \"inline\": false}
        ],
        \"color\": 16711680
      }]
    }"

    curl -H "Content-Type: application/json" -X POST -d "$PAYLOAD" $WEBHOOK_URL
  fi
done
```

## Enable and start failed ssh login attempt alert service

```
sudo systemctl daemon-reload
sudo systemctl enable --now ssh-fail-alert.service
```

## ssh-fail-alert.service

```
[Unit]
Description=SSH failed login Discord alert

[Service]
ExecStart=/usr/local/bin/ssh-fail-alert.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Download YouTube videos with yt-dlp

```
sudo /usr/local/bin/yt-dlp -x --audio-format mp3 --add-metadata --metadata-from-title "%(artist)s - %(title)s"
```
