/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from "@/components/CustomHeader";
import StandardMessageForm from "@/components/CustomMessageForms/StandardMessageForm";

export default function Chat() {
  const chatProps = useMultiChatLogic(
    "a69f838b-6301-4368-b27a-02e53fe51c0b",
    "test-app",
    "1234"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      {/* Socket */}
      <MultiChatSocket {...chatProps} />
      {/* Components */}
      <MultiChatWindow
        {...chatProps}
        style={{
          height: "100vh",
        }}
        renderChatHeader={(chat) => {
          return <CustomHeader chat={chat} />;
        }}
        renderMessageForm={(props) => {
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
}
