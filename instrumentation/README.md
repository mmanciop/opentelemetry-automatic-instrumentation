# Sample App for Node.JS Auto Instrumentation

This sample app demonstrates how you can inject opentelemetry instrumentation into an application without code changes.

Run `npm install` in the `instrumentation` folder, then go into the `application` folder and start the app with injection:

```
NODE_OPTIONS="--require ../instrumentation/inject.js" node client.js
```

This should print out the spans to your console and if available send them to jaeger.
