const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {
    // const { identity, user } = context.clientContext;

    // Configure client for use with Spaces
    const spacesEndpoint = new AWS.Endpoint(process.env.S3_ENDPOINT);
    const s3 = new AWS.S3({
        endpoint: spacesEndpoint,
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
    });

    // Add a file to a Space
    var params = {
        Body: "The contents of the file",
        Bucket: "netlify-spaces",
        Key: "data.json",
    };

    s3.putObject(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ foo: "bar" }),
    });
};