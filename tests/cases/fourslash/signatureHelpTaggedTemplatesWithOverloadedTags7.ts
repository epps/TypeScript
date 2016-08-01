/// <reference path='fourslash.ts' />

//// function f(templateStrings: TemplateStringsArray, p1_o1: string): number;
//// function f(templateStrings: TemplateStringsArray, p1_o2: number, p2_o2: number, p3_o2: number): string;
//// function f(templateStrings: TemplateStringsArray, p1_o3: string, p2_o3: boolean, p3_o3: number): boolean;
//// function f(...foo[]: any) { return ""; }
//// 
//// f `${ }   ${/*1*/ fa/*2*/lse /*3*/}

test.markers().forEach(m => {
    goTo.position(m.position);

    verify.signatureHelpCountIs(3);
    verify.signatureHelpArgumentCountIs(3);

    verify.currentSignatureParameterCountIs(4);
    verify.currentSignatureHelpIs('f(templateStrings: TemplateStringsArray, p1_o3: string, p2_o3: boolean, p3_o3: number): boolean');
    verify.currentParameterHelpArgumentNameIs("p2_o3");
    verify.currentParameterSpanIs("p2_o3: boolean");
});