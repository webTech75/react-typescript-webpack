import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import { spy } from "sinon";

import AdMaterials from "@src/components/AdMaterials";

describe("AdMaterials", () => {
    it("is present", () => {
        const wrapper = shallow(<AdMaterials />);
        expect(wrapper).to.be.present;
    });
});