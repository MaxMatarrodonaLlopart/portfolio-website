// Internationalization management
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.setLanguage(this.currentLang);
        this.initLanguageSelector();
    }

    async loadTranslations() {
        try {
            const [ca, es, en] = await Promise.all([
                fetch('locals/ca.json').then(res => res.json()),
                fetch('locals/es.json').then(res => res.json()),
                fetch('locals/en.json').then(res => res.json())
            ]);
            this.translations = { ca, es, en };
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    setLanguage(lang) {
        if (!this.translations[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        // Actualitzar botons d'idioma
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Traduir tots els elements amb data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getNestedTranslation(lang, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Actualitzar llistes dinàmiques
        this.updateDynamicContent();
    }

    getNestedTranslation(lang, key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], this.translations[lang]);
    }

    updateDynamicContent() {
        // Actualitzar llista d'assignatures
        const subjectsList = document.getElementById('subjects-list');
        if (subjectsList) {
            const subjects = this.translations[this.currentLang].education.subjects.list;
            subjectsList.innerHTML = subjects.map(s => `<li>${s}</li>`).join('');
        }

        // Actualitzar llista d'interessos
        const interestsList = document.getElementById('interests-list');
        if (interestsList) {
            const interests = this.translations[this.currentLang].education.interests.list;
            interestsList.innerHTML = interests.map(i => `<li>${i}</li>`).join('');
        }

        // Actualitzar projectes placeholder
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer) {
            const t = this.translations[this.currentLang].projects;
            projectsContainer.innerHTML = `
                <div class="project-card">
                    <h3>${t.placeholder1.title}</h3>
                    <p>${t.placeholder1.description}</p>
                    <div class="project-tech">
                        <span>C++</span>
                    </div>
                    <a href="https://github.com/MaxMatarrodonaLlopart/candy-crush-max/tree/main" class="project-link">${t.view_code}</a>
                    <img src="/../assets/images/Candy Crush Max Level.png" alt="Candy Crush Max image">
                </div>
                <div class="project-card">
                    <h3>${t.placeholder2.title}</h3>
                    <p>${t.placeholder2.description}</p>
                    <div class="project-tech">
                        <span>HTML/CSS/JS</span>
                        <span>PHP</span>
                        <span>SQL</span>
                    </div>
                    <a href="https://github.com/MaxMatarrodonaLlopart/eShop" class="project-link">${t.view_code}</a>
                    <img src="/../assets/images/eShop.png" alt="eShop image">
                </div>
                <div class="project-card">
                    <h3>${t.placeholder3.title}</h3>
                    <p>${t.placeholder3.description}</p>
                    <div class="project-tech">
                        <span>Python</span>
                    </div>
                    <a href="https://github.com/MaxMatarrodonaLlopart/clothes-classifier" class="project-link">${t.view_code}</a>
                    <img src="/../assets/images/Clothes Classifier.png" alt="Cloth Classifier image">
                </div>
                <div class="project-card">
                    <h3>${t.placeholder4.title}</h3>
                    <p>${t.placeholder4.description}</p>
                    <div class="project-tech">
                        <span>C++</span>
                        <span>XML</span>
                    </div>
                    <a href="https://github.com/MaxMatarrodonaLlopart/moogle-max" class="project-link">${t.view_code}</a>
                    <img src="/../assets/images/Moogle Max.png" alt="Moogle Max image">
                </div>
            `;
        }
    }

    initLanguageSelector() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.dataset.lang);
            });
        });
    }
}

// Inicialitzar quan el DOM estigui llest
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});