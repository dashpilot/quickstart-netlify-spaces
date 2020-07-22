# netlify-spaces

Netlify functions for working with Amazon S3/Digitalocean Spaces. It uses Netlify Identity for authentication, so only logged-in users can make requests to S3/Spaces.

## How To:

### 1. Deploy this repo to Netlify

Deploy this repo to Netlify using the 'Deploy to Netlify'-button below:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/dashpilot/quickstart-netlify-spaces"><img src="https://www.netlify.com/img/deploy/button.svg" /></a>

### 2. Add your S3 credentials as environment variables

In Netlify, go to settings > environment and create the following environment variables for your Amazon S3 or Digitalocean Spaces settings

`S3_ENDPOINT`: your S3/Spaces endpoint (e.g ams3.digitaloceanspaces.com)\
`S3_KEY`: your S3/Spaces key\
`S3_SECRET`: your S3/Spaces secret\
`S3_BUCKET`: your S3/Spaces bucket

### 3. Enable Netlify Identity and log in
In Netlify, go to 'Identity' and press 'Enable Identity'\
Log in to your website via /login\
After login, you'll be redirected to the homepage, where you can test the integration with S3/Spaces

### 4. Press the :star: button
Don't forget to press the :star: button to let me know I should continue improving this project
