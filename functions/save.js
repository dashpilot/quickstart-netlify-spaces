const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {
    try {
        const { user } = context.clientContext;

        if (!user) throw new Error("Not Authorized");

        if (event.httpMethod !== "POST") {
            return {
                statusCode: 405,
                body: "Method Not Allowed",
            };
        }

        const jsondata = JSON.parse(event.body);

        // Configure client for use with Spaces
        const spacesEndpoint = new AWS.Endpoint(process.env.S3_ENDPOINT);
        const s3 = new AWS.S3({
            endpoint: spacesEndpoint,
            accessKeyId: process.env.S3_KEY,
            secretAccessKey: process.env.S3_SECRET,
        });

        // Add a file to a Space
        var params = {
            Body: JSON.stringify(jsondata.data),
            Bucket: "netlify-spaces",
            Key: "data.json",
            Acl: "public-read",
        };

        s3.putObject(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log(data);
        });

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ foo: "bar" }),
        });
    } catch (error) {
        return {
            statusCode: 401,
            body: "Not Authorized.",
        };
    }
};