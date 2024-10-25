import { GitHubStarButton } from "../components/GitHubStarButton";
import { TechnologyCard } from "../components/TechnologyCard";
import { CharacterLimit } from "../components/CharacterLimit";
import { FilterListBox } from "../components/FilterListBox";
import { StatusMessage } from "../components/StatusMessage";
import { generateRandomId } from "./generate-random-id";
import { PostCardTag } from "../components/PostCardTag";
import { LinkButton } from "../components/LinkButton";
import { Listening } from "../components/Listening";
import { TextArea } from "../components/TextArea";
import { PlainTag } from "../components/PlainTag";
import { Skeleton } from "../components/Skeleton";
import { Dropdown } from "../components/Dropdown";
import { Components } from "../types/components";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { LinkTag } from "../components/LinkTag";
import { Date as D } from "../components/Date";
import { Toggle } from "../components/Toggle";
import { GoBack } from "../components/GoBack";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Border } from "../components/Border";
import { Switch } from "../components/Switch";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Form } from "../components/Form";
import { Tag } from "../components/Tag";
import { Key } from "../components/Key";

export const COMPONENTS: Components[] = [
  {
    id: generateRandomId(),
    text: "Tag",
    component: <Tag title="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Heading",
    component: <Heading>Example</Heading>,
  },
  {
    id: generateRandomId(),
    text: "Button",
    component: <Button>Example</Button>,
  },
  {
    id: generateRandomId(),
    text: "Label",
    component: <Label text="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Input",
    component: <Input placeholder="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Link Tag",
    component: <LinkTag href="/api/example">Example</LinkTag>,
  },
  {
    id: generateRandomId(),
    text: "Avatar",
    component: <Avatar width={60} height={60} />,
  },
  {
    id: generateRandomId(),
    text: "Character Limit",
    component: <CharacterLimit text="" limit={100} />,
  },
  {
    id: generateRandomId(),
    text: "Status Message",
    component: <StatusMessage message="Example" type="success" />,
  },
  {
    id: generateRandomId(),
    text: "Border",
    component: <Border />,
  },
  {
    id: generateRandomId(),
    text: "Filter Box",
    component: (
      <FilterListBox
        items={[{ tag: "", slug: "" }]}
        selectedItem="Example"
        onChange={() => {}}
      />
    ),
  },
  {
    id: generateRandomId(),
    text: "Loading",
    component: <Loading text="Loading..." loading={true} />,
  },
  {
    id: generateRandomId(),
    text: "Skeleton",
    component: <Skeleton style={{ marginBottom: 0, marginRight: 0 }} />,
  },
  {
    id: generateRandomId(),
    text: "Text",
    component: <Text>Example</Text>,
  },
  {
    id: generateRandomId(),
    text: "Textarea",
    component: <TextArea placeholder="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Switch",
    component: <Switch enabled={false} setEnabled={() => {}} />,
  },
  {
    id: generateRandomId(),
    text: "Date",
    component: <D date={new Date().toString()} />,
  },
  {
    id: generateRandomId(),
    text: "Toggle",
    component: <Toggle />,
  },
  {
    id: generateRandomId(),
    text: "Dropdown",
    component: (
      <Dropdown
        items={[
          { id: generateRandomId(), text: "Example1", to: "/api/example?e=1" },
          { id: generateRandomId(), text: "Example2", to: "/api/example?e=2" },
          { id: generateRandomId(), text: "Example3", to: "/api/example?e=3" },
        ]}
      />
    ),
  },
  {
    id: generateRandomId(),
    text: "Key",
    component: <Key>Example</Key>,
  },
  {
    id: generateRandomId(),
    text: "Listening",
    component: <Listening setActive={() => {}} style={{ margin: 0 }} />,
  },
  {
    id: generateRandomId(),
    text: "Note",
    component: <Note>Example</Note>,
  },
  {
    id: generateRandomId(),
    text: "Technology Card",
    component: (
      <TechnologyCard
        style={{ margin: 0 }}
        desc="Java is a high-level, class-based, object-oriented programming language."
        link="https://www.java.com/en/"
        text="Java"
      />
    ),
  },
  {
    id: generateRandomId(),
    text: "Post Card Tag",
    component: <PostCardTag title="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Link Button",
    component: (
      <LinkButton href="" target="_self">
        Example
      </LinkButton>
    ),
  },
  {
    id: generateRandomId(),
    text: "Form",
    component: (
      <div>
        <Form
          style={{ marginTop: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitted!");
          }}
        >
          <Button>Submit</Button>
        </Form>
      </div>
    ),
  },
  {
    id: generateRandomId(),
    text: "GitHub Star Button",
    component: <GitHubStarButton />,
    note: "If the button doesn't show (only the text shows) reload the page.",
  },
  {
    id: generateRandomId(),
    text: "Plain Tag",
    component: <PlainTag text="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Go Back",
    component: <GoBack />,
  },
];
