import * as React from "react";
import { connect } from "react-redux";

import AdMaterials from "@src/components/AdMaterials";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {

    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdMaterials);
