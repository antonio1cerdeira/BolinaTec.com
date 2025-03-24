document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const cookieBanner = document.getElementById('cookieBanner');
    const customizePanel = document.getElementById('customizePanel');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    const customizeCookiesButton = document.getElementById('customizeCookies');
    const rejectCookiesButton = document.getElementById('rejectCookies');
    const savePreferencesButton = document.getElementById('savePreferences');
    const essentialCookiesToggle = document.getElementById('essentialCookies');
    const analyticsCookiesToggle = document.getElementById('analyticsCookies');
    const marketingCookiesToggle = document.getElementById('marketingCookies');
    const cookieSettingsButton = document.getElementById('cookieSettings');
    const confirmationToast = document.getElementById('confirmationToast');
    
    // Verificar se o consentimento já foi dado
    const cookieConsent = localStorage.getItem('cookieConsent');
    const cookiePreferences = localStorage.getItem('cookiePreferences') ? 
        JSON.parse(localStorage.getItem('cookiePreferences')) : 
        { essential: true, analytics: false, marketing: false };
    
    // Função para mostrar o banner com animação
    function showBanner() {
        cookieBanner.style.display = 'flex';
        setTimeout(() => {
            cookieBanner.classList.add('slide-in');
        }, 10);
    }
    
    // Atualizar toggles baseado nas preferências salvas
    function updateTogglesFromPreferences() {
        analyticsCookiesToggle.checked = cookiePreferences.analytics;
        marketingCookiesToggle.checked = cookiePreferences.marketing;
    }
    
    // Mostrar toast de confirmação
    function showConfirmationToast(message) {
        confirmationToast.textContent = message;
        confirmationToast.style.display = 'block';
        setTimeout(() => {
            confirmationToast.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            confirmationToast.style.opacity = '0';
            setTimeout(() => {
                confirmationToast.style.display = 'none';
            }, 300);
        }, 3000);
    }
    
    // Inicializar cookies e scripts baseado nas preferências
    function initializeCookiesAndScripts() {
        if (cookiePreferences.analytics) {
            // Código para inicializar scripts analíticos
            console.log('Scripts analíticos inicializados');
        }
        
        if (cookiePreferences.marketing) {
            // Código para inicializar scripts de marketing
            console.log('Scripts de marketing inicializados');
        }
    }
    
    // Salvar preferências e ocultar banner
    function saveAndHideBanner(preferences, message = 'Suas preferências foram salvas!') {
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        cookiePreferences.analytics = preferences.analytics;
        cookiePreferences.marketing = preferences.marketing;
        
        cookieBanner.classList.add('slide-out');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
            cookieBanner.classList.remove('slide-out');
        }, 500);
        
        showConfirmationToast(message);
        initializeCookiesAndScripts();
        
        // Mostrar botão de configurações após um tempo
        setTimeout(() => {
            cookieSettingsButton.style.display = 'flex';
        }, 1000);
    }
    
    // Checar se já temos consentimento ou mostrar o banner
    if (cookieConsent === 'true') {
        initializeCookiesAndScripts();
        cookieSettingsButton.style.display = 'flex';
    } else {
        showBanner();
    }
    
    // Event listeners
    acceptCookiesButton.addEventListener('click', function() {
        const allAcceptedPreferences = {
            essential: true,
            analytics: true,
            marketing: true
        };
        saveAndHideBanner(allAcceptedPreferences, 'Todos os cookies foram aceitos!');
    });
    
    customizeCookiesButton.addEventListener('click', function() {
        updateTogglesFromPreferences();
        customizePanel.style.display = customizePanel.style.display === 'block' ? 'none' : 'block';
        customizeCookiesButton.textContent = customizePanel.style.display === 'block' ? 'Ocultar preferências' : 'Personalizar preferências';
    });
    
    rejectCookiesButton.addEventListener('click', function() {
        const essentialOnlyPreferences = {
            essential: true,
            analytics: false,
            marketing: false
        };
        saveAndHideBanner(essentialOnlyPreferences, 'Apenas cookies essenciais aceitos');
    });
    
    savePreferencesButton.addEventListener('click', function() {
        const customPreferences = {
            essential: true,
            analytics: analyticsCookiesToggle.checked,
            marketing: marketingCookiesToggle.checked
        };
        saveAndHideBanner(customPreferences);
    });
    
    cookieSettingsButton.addEventListener('click', function() {
        updateTogglesFromPreferences();
        customizePanel.style.display = 'block';
        showBanner();
        cookieSettingsButton.style.display = 'none';
    });
    
    // Rastrear estatísticas de uso (apenas para demonstração)
    function trackConsentStats(decision) {
        // Em produção, isso enviaria dados para um servidor para análise de marketing
        console.log(`Consent decision tracked: ${decision}`);
        // Exemplo: fetch('/api/track-consent', { method: 'POST', body: JSON.stringify({ decision }) });
    }
    
    // Adicionar rastreamento para botões - dados valiosos para marketing
    acceptCookiesButton.addEventListener('click', () => trackConsentStats('accept_all'));
    rejectCookiesButton.addEventListener('click', () => trackConsentStats('essential_only'));
    savePreferencesButton.addEventListener('click', () => {
        const decisions = [];
        if (analyticsCookiesToggle.checked) decisions.push('analytics');
        if (marketingCookiesToggle.checked) decisions.push('marketing');
        trackConsentStats(`custom: ${decisions.join(', ')}`);
    });
}); 