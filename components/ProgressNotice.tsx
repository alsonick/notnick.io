import { Notice } from "./Notice";

export const ProgressNotice = () => {
  return (
    <div className="flex items-center justify-center p-20 mt-8">
      <Notice>
        In progress...
        <br />
        Come back and check <br />
        again later.
      </Notice>
    </div>
  );
};
