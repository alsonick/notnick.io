import { CharacterLimit } from "../components/CharacterLimit";
import { FilterListBox } from "../components/FilterListBox";
import { TextArea } from "../components/TextArea";
import { Skeleton } from "../components/Skeleton";
import { Dropdown } from "../components/Dropdown";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Warning } from "../components/Warning";
import { Success } from "../components/Success";
import { Date as D } from "../components/Date";
import { Toggle } from "../components/Toggle";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Switch } from "../components/Switch";
import { Error } from "../components/Error";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Tag } from "../components/Tag";
import { Key } from "../components/Key";

export const COMPONENTS = [
  {
    id: 1,
    text: "Tag",
    component: <Tag title="Example" />,
  },
  {
    id: 2,
    text: "Heading",
    component: <Heading>Example</Heading>,
  },
  {
    id: 3,
    text: "Button",
    component: <Button>Example</Button>,
  },
  {
    id: 4,
    text: "Label",
    component: <Label text="Example" />,
  },
  {
    id: 5,
    text: "Input",
    component: <Input placeholder="Example" />,
  },
  {
    id: 6,
    text: "Link",
    component: <LinkT href="">Example</LinkT>,
  },
  {
    id: 7,
    text: "Avatar",
    component: <Avatar width={50} height={50} />,
  },
  {
    id: 8,
    text: "Character Limit",
    component: <CharacterLimit text="" limit={100} />,
  },
  {
    id: 9,
    text: "Success",
    component: <Success message="Example" />,
  },
  {
    id: 10,
    text: "Warning",
    component: <Warning message="Example" />,
  },
  {
    id: 11,
    text: "Error",
    component: <Error message="Example" />,
  },
  {
    id: 12,
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
    id: 13,
    text: "Loading",
    component: <Loading text="Loading..." loading={true} />,
  },
  {
    id: 14,
    text: "Skeleton",
    component: <Skeleton style={{ marginBottom: 0, marginRight: 0 }} />,
  },
  {
    id: 15,
    text: "Text",
    component: <Text>Example</Text>,
  },
  {
    id: 16,
    text: "Textarea",
    component: <TextArea placeholder="Example" />,
  },
  {
    id: 17,
    text: "Switch",
    component: <Switch enabled={false} setEnabled={() => {}} />,
  },
  {
    id: 18,
    text: "Date",
    component: <D date={new Date().toString()} />,
  },
  {
    id: 19,
    text: "Toggle",
    component: <Toggle />,
  },
  {
    id: 20,
    text: "Dropdown",
    component: <Dropdown items={[]} />,
  },
  {
    id: 21,
    text: "Key",
    component: <Key>Example</Key>,
  },
  {
    id: 22,
    text: "Note",
    component: <Note>Example</Note>,
  },
];
