import { TechnologyCard } from "../../components/home/TechnologyCard";
import { CharacterLimit } from "../../components/ui/CharacterLimit";
import { FilterListBox } from "../../components/ui/FilterListBox";
import { StatusMessage } from "../../components/ui/StatusMessage";
import { generateRandomId } from "../utils/generate-random-id";
import { PostCardTag } from "../../components/posts/PostCardTag";
import { LinkButton } from "../../components/ui/LinkButton";
import { TextArea } from "../../components/ui/TextArea";
import { PlainTag } from "../../components/ui/PlainTag";
import { Skeleton } from "../../components/ui/Skeleton";
import { Dropdown } from "../../components/ui/Dropdown";
import { Components } from "../../types/components";
import { Heading } from "../../components/ui/Heading";
import { Loading } from "../../components/ui/Loading";
import { LinkTag } from "../../components/ui/LinkTag";
import { Date as D } from "../../components/ui/Date";
import { Toggle } from "../../components/layout/Toggle";
import { GoBack } from "../../components/layout/GoBack";
import { Avatar } from "../../components/ui/Avatar";
import { Button } from "../../components/ui/Button";
import { Switch } from "../../components/ui/Switch";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Text } from "../../components/ui/Text";
import { Note } from "../../components/ui/Note";
import { Form } from "../../components/ui/Form";
import { Tag } from "../../components/ui/Tag";
import { Key } from "../../components/ui/Key";

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
    text: "Character Limit {limit: 100}",
    component: <CharacterLimit text="" limit={100} />,
  },
  {
    id: generateRandomId(),
    text: "Status Message {type: success}",
    component: <StatusMessage message="Example" type="success" />,
  },
  {
    id: generateRandomId(),
    text: "Status Message {type: warning}",
    component: <StatusMessage message="Example" type="warning" />,
  },
  {
    id: generateRandomId(),
    text: "Status Message {type: error}",
    component: <StatusMessage message="Example" type="error" />,
  },
  {
    id: generateRandomId(),
    text: "Filter Box",
    component: (
      <FilterListBox
        items={[{ tag: "", slug: "" }]}
        selectedItem="Example"
        onChange={() => {}}
        label="Example"
      />
    ),
  },
  {
    id: generateRandomId(),
    text: "Loading {loading: true}",
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
    component: <Switch enabled={false} setEnabled={() => {}} label="Example" />,
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
    text: "Note",
    component: <Note>Example</Note>,
  },
  {
    id: generateRandomId(),
    text: "Technology Card",
    component: (
      <TechnologyCard
        link="https://www.python.org/"
        style={{ margin: 0 }}
        text="Python"
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
    text: "Plain Tag",
    component: <PlainTag text="Example" />,
  },
  {
    id: generateRandomId(),
    text: "Go Back",
    component: <GoBack />,
  },
];
