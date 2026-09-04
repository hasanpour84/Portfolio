import { RayvarzChallenges } from "./RayvarzChallenges";
import { RayvarzMetrics } from "./RayvarzMetrics";
import { RayvarzRole } from "./RayvarzRole";
import { RayvarzStrategy } from "./RayvarzStrategy";
import { RayvarzSystemsFeature } from "./RayvarzSystemsFeature";
import { RayvarzSystemsLibrary } from "./RayvarzSystemsLibrary";

export function RayvarzCaseStudy() {
  return <>
    <RayvarzChallenges />
    <RayvarzRole />
    <RayvarzStrategy />
    <RayvarzSystemsFeature />
    <RayvarzSystemsLibrary />
    <RayvarzMetrics />
  </>;
}
