const skills = function () {
    return {
        languages: [],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/sapoepsilon', { method: 'GET' });
            const javascriptObject = await res.json();
            const fetchedLangeages = javascriptObject.data;
            const languagesIWant = ['Dart', 'JavaScript', 'HTML', 'Bash'];

            languagesIWant.forEach(language => {
                const languageObject = {
                    language: '',
                    path: 0,
                    hours: '',
                    minutes: '',
                    percentage: '',
                };
                languageObject.language = language;
                languageObject.path = `./assets/icons/${language}.svg`;
                const fetchedLanguage = fetchedLangeages.languages.filter(obj => obj.name === language);
                languageObject.hours = fetchedLanguage[0].hours;
                languageObject.minutes = fetchedLanguage[0].minutes;
                languageObject.percentage = `${(100 / 100) * fetchedLanguage[0].hours}%`;
                this.languages.push(languageObject);
            });
            console.log(`languages time: ${this.languages[0].time}`);
        },
    };
};

window.skills = skills;

// eslint-disable-next-line no-unused-vars
const github = function () {
    return {
        projects: [],
        async load() {
            const url = 'https://api.github.com/users/sapoepsilon/repos';
            const projectsIwant = ['Hydro-Homie-ios', 'streamer'];
            let fetchedRepos = [];

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const reposArray = data.map(repo => ({
                        name: repo.name,
                        url: repo.html_url,
                        description: repo.description,
                        language: repo.language,
                    }));
                    fetchedRepos = reposArray;
                    console.log('fetchedRepos', data);

                    fetchedRepos.forEach(repo => {
                        if (projectsIwant.includes(repo.name)) {
                            const projectObject = {
                                name: repo.name,
                                url: repo.url,
                                description: repo.description,
                                language: repo.language,
                            };
                            this.projects.push(projectObject);
                        }
                    });
                    console.log('data ', this.projects);
                })
                .catch(error => console.error(error));
        },
    };
};

window.github = github;
