import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getText", (req) => {
  return "A welcome message from the resolver ... howdy!";
});

export const handler = resolver.getDefinitions();
