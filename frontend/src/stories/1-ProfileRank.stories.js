import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import ProfileRank from "../components/ProfileRank";

export const rank = {
    hasRank: true
};

storiesOf('ProfileRank', module)
    .add('default', () => <ProfileRank {...rank}/>)
    .add('hasNoRank', () => <ProfileRank hasRank={false}/>);