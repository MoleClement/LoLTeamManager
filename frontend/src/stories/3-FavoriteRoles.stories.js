import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import FavoriteRoles from "../components/Player/FavoriteRoles";


storiesOf('Favorite Roles', module)
    .add('default', () => <FavoriteRoles/>);