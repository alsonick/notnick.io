import { ISRCResponse, SpotifyAccessToken } from "../../../types/spotify";
import { CharacterLimit } from "../../../components/CharacterLimit";
import { FULL_NAME, PROFESSION } from "../../../lib/constants";
import { FiCopy, FiSearch, FiCheck } from "react-icons/fi";
import { Heading } from "../../../components/Heading";
import { Animate } from "../../../components/Animate";
import { Loading } from "../../../components/Loading";
import { Success } from "../../../components/Success";
import { Layout } from "../../../components/Layout";
import { GoBack } from "../../../components/GoBack";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Error } from "../../../components/Error";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";
import { LinkT } from "../../../components/Link";
import { Text } from "../../../components/Text";
import { Form } from "../../../components/Form";
import { Seo } from "../../../components/Seo";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import copy from "copy-to-clipboard";

// Next.js
import { NextPage } from "next";
import Image from "next/image";

const ISRC: NextPage = () => {
  const [soundtrackTitle, setSoundtrackTitle] = useState("");
  const [data, setData] = useState<ISRCResponse>();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const URL = "https://api.spotify.com/v1/search";
  const CHARACTER_LIMIT = 100;

  const sendSpotifyIsrcRequest = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (soundtrackTitle.length > CHARACTER_LIMIT) {
      setLoading(false);
      return setError(`You can only have ${CHARACTER_LIMIT} characters.`);
    }

    setLoading(true);

    fetch("/api/tools/yt/isrc", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((t: { token: SpotifyAccessToken }) => {
        fetch(
          `${URL}?q=${encodeURIComponent(soundtrackTitle)}&type=track&limit=1`,
          {
            method: "GET",
            headers: {
              Authorization: `${t.token.token_type} ${t.token.access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((response: ISRCResponse) => {
            if (response.error) {
              setLoading(false);
              setError(response.error.message);
            }

            if (response.tracks) {
              setSoundtrackTitle("");
              setData(response);
              setLoading(false);
              setSuccess(
                `Successfully found the track '${response.tracks.items[0].name}'.`
              );
            }
          })
          .catch((error) => {
            setLoading(false);
            setError(error);
            return;
          });
      });
  };

  return (
    <>
      <Seo
        title={`ISRC Finder • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout longLayoutFormat={false} supportLargeScreen={true}>
        <Animate>
          <Header column={false} singleItem={false}>
            <Heading style={{ marginBottom: "0.5rem" }}>ISRC</Heading>
          </Header>
          <Text>
            Find the <LinkT>ISRC</LinkT> codes to a collection of over 100
            million tracks on Spotify.
          </Text>
          <div className="my-4">
            <Form onSubmit={sendSpotifyIsrcRequest} action="POST">
              <div className="w-full">
                <div className="mb-3">
                  <div className="mb-1">
                    <Label text="soundtrack" />
                  </div>
                  <Input
                    placeholder="Spotify Link + Soundtrack Title"
                    style={{ width: "100%" }}
                    required={true}
                    value={soundtrackTitle}
                    onChange={(e) => {
                      setSoundtrackTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-6 mb-3 w-full justify-between flex items-center">
                  <CharacterLimit
                    limit={CHARACTER_LIMIT}
                    text={soundtrackTitle}
                  />
                  <Button style={{ marginLeft: "auto" }}>
                    Search{" "}
                    <FiSearch className="text-xl ml-2 hover:scale-110 duration-150" />
                  </Button>
                </div>
                <Loading loading={loading} text="Loading..." />
                {error && !loading ? <Error message={error} /> : null}
                {success && !loading ? <Success message={success} /> : null}
              </div>
            </Form>
            <div className="my-12 text-center flex flex-col items-center">
              <FaSpotify className="text-gray-600 mb-1 dark:text-gray-300 hover:scale-110 duration-300 hover:text-black dark:hover:text-white" />
              <Text>All request data is provided by Spotify. </Text>
              <LinkT href="https://developer.spotify.com/" target="_blank">
                developer.spotify.com
              </LinkT>
            </div>
            {data && !loading && !error && (
              <div className="flex flex-col mt-24">
                <div className="flex items-center justify-between w-full mb-12">
                  <Text style={{ fontSize: "2rem" }}>
                    {data.tracks.items[0].external_ids.isrc}
                  </Text>
                  <Button
                    onClick={() => {
                      setCopied(true);
                      copy(data.tracks.items[0].external_ids.isrc, {
                        debug: true,
                      });
                      setTimeout(() => {
                        setCopied(false);
                      }, 3000);
                    }}
                  >
                    {copied ? "Copied" : "Copy"}{" "}
                    {copied ? (
                      <FiCheck className="text-xl ml-2 hover:scale-110 duration-150" />
                    ) : (
                      <FiCopy className="text-xl ml-2 hover:scale-110 duration-150" />
                    )}
                  </Button>
                </div>
                <div className="mb-12 flex items-center w-full justify-center">
                  <Text style={{ fontSize: "2rem", textAlign: "center" }}>
                    <b>{data.tracks.items[0].name}</b> by{" "}
                    <b>{data.tracks.items[0].artists[0].name}</b>
                  </Text>
                  <div className="mt-3 text-center ml-6">
                    <LinkT
                      style={{ fontSize: "1.5rem" }}
                      href={data.tracks.items[0].external_urls.spotify}
                      target="_blank"
                    >
                      Album Link
                    </LinkT>
                    <Image
                      className="mt-2"
                      src={data.tracks.items[0].album.images[0].url}
                      height={data.tracks.items[0].album.images[0].height}
                      width={data.tracks.items[0].album.images[0].width}
                      alt={`Album cover for ${data.tracks.items[0].name} by ${data.tracks.items[0].artists[0].name}`}
                      title={`Album cover for ${data.tracks.items[0].name} by ${data.tracks.items[0].artists[0].name}`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default ISRC;
