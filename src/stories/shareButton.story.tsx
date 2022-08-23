import React from "react";
import { storiesOf } from "@storybook/react";
import ShareButton from '../components/share/Button'



storiesOf("ShareButton", module)
  .add("with text", () => <ShareButton text="Share" />)

