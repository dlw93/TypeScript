//// [tests/cases/conformance/esDecorators/classDeclaration/esDecorators-classDeclaration-missingEmitHelpers-staticPrivateGetter.ts] ////

//// [main.ts]
export {}

declare var dec: any;

// needs: __esDecorate, __runInitializers, __setFunctionName
class C {
    @dec static get #foo() { return 1; }
}

//// [tslib.d.ts]
export {}


//// [main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// needs: __esDecorate, __runInitializers, __setFunctionName
let C = (() => {
    let _staticExtraInitializers = [];
    let _static_private_get_foo_decorators;
    let _static_private_get_foo_descriptor;
    return class C {
        static {
            _static_private_get_foo_decorators = [dec];
            tslib_1.__esDecorate(this, _static_private_get_foo_descriptor = { get: tslib_1.__setFunctionName(function () { return 1; }, "#foo", "get") }, _static_private_get_foo_decorators, { kind: "getter", name: "#foo", static: true, private: true }, null, _staticExtraInitializers);
            tslib_1.__runInitializers(this, _staticExtraInitializers);
        }
        static get #foo() { return _static_private_get_foo_descriptor.get.call(this); }
    };
})();
