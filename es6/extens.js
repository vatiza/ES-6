class Instructor{
    name;
    designation = 'web course instractor';
    team = 'web team';
    location;
    constructor(name,location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
     console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}



class Developer{
    name;
    designation = 'web course instractor';
    team = 'web team';
    location;
    tech;
    constructor(name,location ,tech) {
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    developerFeature(feature) {
     console.log(`please develop add ${feature}`)
    }
    releaseVersion(version) {
        console.log(`please release vertion${version}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}

