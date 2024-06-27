import React, { useEffect, useState } from "react";
import SectionMessage, {
  SectionMessageAction,
} from "@atlaskit/section-message";

const App = ({
  invoke,
  view,
  routerOpen,
}: {
  invoke: (key: string, params: any) => Promise<any>;
  view: any;
  routerOpen: (uri: string) => Promise<void>;
}) => {
  const [resolverText, setResolverText] = useState<string | null>(null);

  // ENABLE DARK MODE THEME SUPPORT HERE
  view.theme.enable().then(() => console.log("Forge App Theme Enable Success"));

  useEffect(() => {
    invoke("getText", {}).then((response: any) => {
      console.log("resolver response:", response);
      setResolverText(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Demo Atlassian Jira Cloud Forge App</h2>

      <SectionMessage title="Error with Theme support" appearance="error">
        <p>
          Open the Developer console and you can see that the forge bridge.js
          cannot load the{" "}
          <code>
            https://forge.cdn.prod.atlassian-dev.net/atlaskit-tokens_dark.css
          </code>{" "}
          CSS file. Therefore the dark mode of the forge app does not work. The
          theme switcher is greyed out as well. (switch to dark mode on the Jira
          dashboard and then navigate to the app page).
        </p>
      </SectionMessage>

      <SectionMessage
        title="This is a demo with source code available"
        actions={[
          <SectionMessageAction
            onClick={() =>
              routerOpen(
                "https://github.com/clouless/demo-atlassian-jira-cloud-forge-app"
              )
            }
          >
            See Source on GitHub
          </SectionMessageAction>,
        ]}
      >
        <p>Response from the resolver: {resolverText}</p>
      </SectionMessage>
    </div>
  );
};

export default App;
