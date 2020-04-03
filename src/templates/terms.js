import React from "react";
// import _ from "lodash";

// import { Layout } from "../components/index";
// import { markdownify, Link } from "../utils";

import {
  LanguageProvider,
  LanguageContext
} from "../components/Language/LanguageContext";
// import { allLangs } from "../components/Language/Langs/langs";

export default class terms extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <LanguageContext.Consumer>
          {language => <div>a</div>}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
  }
}
