/* =========================================================
   PORTAL DA RIBEIRADA — MARISQUEIRA
   ========================================================= */
'use strict';

/* ---------- Dados da ementa (retirados da ementa oficial) ---------- */
const MENU = {
    entradas: {
        label: 'Entradas',
        groups: [
            {
                title: 'Sopa & Couvert',
                items: [
                    ['Sopa do dia', '2,00€'],
                    ['Pão', '0,80€'],
                    ['Cesto de pão torrado', '2,50€'],
                    ['Azeitonas', '1,00€'],
                    ['Manteiga', '1,00€'],
                ]
            },
            {
                title: 'Entradas',
                items: [
                    ['Queijo fresco', '2,00€'],
                    ['Queijo alentejano', '4,50€'],
                    ['Queijo amanteigado', '5,00€'],
                    ['Paio alentejano', '5,00€'],
                    ['Paté de marisco c/ tostinhas', '6,00€'],
                    ['Salada de polvo', '9,00€', 'pires'],
                    ['Salada de polvo', '14,00€', 'travessa'],
                    ['Salada de búzios', '9,00€', 'dose'],
                ]
            },
            {
                title: 'Saladas & Complementos',
                items: [
                    ['Salada simples', '3,50€', 'alface ou tomate'],
                    ['Salada mista', '5,50€'],
                    ['Grelos salteados', '4,50€'],
                    ['Feijão verde', '4,50€'],
                    ['Dose de batatas fritas', '3,00€'],
                    ['Dose de arroz', '3,00€'],
                ]
            }
        ]
    },
    peixe: {
        label: 'Peixe',
        groups: [{
            title: 'Peixe grelhado',
            items: [
                ['Peixe espada grelhado', '18,90€'],
                ['Dourada grelhada', '15,90€'],
                ['Robalo grelhado', '15,90€'],
                ['Chocos com tinta ou sem', '16,90€'],
                ['Carapaus grelhados', '12,00€'],
                ['Lulas grelhadas', '18,00€'],
                ['Polvo à lagareiro', '18,90€'],
                ['Cabeça de garoupa grelhada', '45,00€/kg'],
                ['Robalo escalado', '50,00€/kg', 'peso'],
                ['Linguado grelhado', '65,00€/kg', 'peso'],
                ['Garoupa grelhada', '60,00€/kg', 'peso'],
                ['Pregado grelhado', '50,00€/kg', 'peso'],
                ['Dourada escalada', '50,00€/kg', '2 pessoas · peso'],
            ]
        }]
    },
    carne: {
        label: 'Carne',
        groups: [
            {
                title: 'Doses (meia / dose)',
                items: [
                    ['Carne alentejana', '14,00€ / 18,90€'],
                    ['Carne à portuguesa', '12,00€ / 22,00€'],
                    ['Bife au champignon', '13,00€ / 18,00€'],
                    ['Secretos de porco preto', '12,00€ / 19,00€'],
                    ['Costeleta de novilho', '18,90€ / 22,00€'],
                ]
            },
            {
                title: 'Da grelha & pratos',
                items: [
                    ['Bitoque', '14,90€'],
                    ['Bife especial da vazia', '12,90€'],
                    ['Bife à café', '19,90€'],
                    ['Bife três pimentas', '19,90€'],
                    ['Picanha brasileira', '19,90€'],
                    ['Lombinhos de porco com gambas', '18,90€'],
                    ['Pianinho de porco no churrasco', '19,90€'],
                    ['Cataplana de carne de porco e gambas', '39,90€', '2 pessoas'],
                    ['Pica-pau', '18,00€'],
                    ['Prego no pão', '6,50€'],
                    ['Prego no prato', '9,90€'],
                    ['Bifana no pão', '5,50€'],
                ]
            }
        ]
    },
    marisco: {
        label: 'Marisco',
        note: 'Todo o nosso marisco é fresco e cozido ao dia.',
        groups: [{
            title: 'Marisco fresco',
            items: [
                ['Sapateira média', '50,00€/kg'],
                ['Sapateira grande', '55,00€/kg'],
                ['Gambas cozidas', '50,00€/kg'],
                ['Gamba à lá guilho', '16,90€'],
                ['Camarão de espinho', '120,00€/kg'],
                ['Camarão tigre grelhado', '80,00€/kg'],
                ['Canilhas', '80,00€/kg'],
                ['Canivetes', '16,00€'],
                ['Perceves', '80,00€/kg'],
                ['Mexilhão', '14,90€'],
                ['Lavagante', '120,00€/kg'],
                ['Cadelinhas', '22,00€'],
                ['Ameijoas', '26,00€'],
                ['Berbigão', '18,00€'],
            ]
        }]
    },
    especialidades: {
        label: 'Especialidades',
        groups: [{
            title: 'Especialidades da casa',
            items: [
                ['Arroz de tamboril e gambas', '40,00€', '2 pessoas'],
                ['Arroz de gambas', '35,00€', '2 pessoas'],
                ['Cataplana de tamboril', '40,00€', '2 pessoas'],
                ['Arroz de marisco', '45,00€', '2 pessoas'],
                ['Massada de marisco', '45,00€', '2 pessoas'],
                ['Cataplana de marisco', '45,00€', '2 pessoas'],
                ['Açorda de gambas', '25,00€'],
                ['Caril de gambas', '20,00€'],
                ['Bacalhau à lagareiro', '18,00€'],
            ]
        }]
    },
    sobremesas: {
        label: 'Sobremesas',
        groups: [
            {
                title: 'Doçaria',
                items: [
                    ['Maçã assada', '3,50€'],
                    ['Doce da casa', '3,00€'],
                    ['Bolo de bolacha', '3,50€'],
                    ['Molotof', '3,50€'],
                    ['Arroz-doce', '3,00€'],
                    ['Pudim caseiro', '3,50€'],
                    ['Toucinho do céu', '3,50€'],
                    ['Tarte de amêndoa', '3,50€'],
                    ['Leite de creme', '3,00€'],
                    ['Baba de camelo', '3,50€'],
                    ['Mousse de chocolate', '3,50€'],
                    ['Mousse de manga', '3,50€'],
                ]
            },
            {
                title: 'Fruta',
                items: [
                    ['Pêra avinhada', '3,00€'],
                    ['Laranja / pêro / kiwi', '2,00€'],
                    ['Melão', '3,00€'],
                    ['Morangos', '3,50€'],
                    ['Ananás / cerejas', '4,00€'],
                    ['Manga', '5,80€'],
                    ['Salada de fruta', '3,50€'],
                ]
            }
        ]
    },
    bebidas: {
        label: 'Bebidas',
        groups: [
            {
                title: 'Cervejas',
                items: [
                    ['Imperial', '1,40€'], ['Tulipa', '2,80€'], ['Sagres 0,33L', '1,80€'],
                    ['Caneca', '3,10€'], ['S/ álcool', '2,20€'], ['Somersby', '2,80€'],
                ]
            },
            {
                title: 'Águas & Sumos',
                items: [
                    ['Água ¼', '1,40€'], ['Água ½', '1,80€'], ['Água com gás 25cl / 50cl', '1,80€ / 3,00€'],
                    ['Água tónica', '2,00€'], ['Coca-Cola', '2,20€'], ['7 Up', '2,00€'],
                    ['Sumol laranja / ananás', '2,00€'], ['Ginger ale', '2,00€'], ['Ice tea', '2,00€'], ['Compal', '2,40€'],
                ]
            },
            {
                title: 'Cafetaria',
                items: [
                    ['Café', '1,00€'], ['Descafeinado', '1,20€'], ['Café abatanado', '1,20€'],
                    ['Café em bule', '2,20€'], ['Carioca de limão', '1,00€'],
                ]
            }
        ]
    }
};

/* ---------- Galeria ---------- */
const GALLERY = [
    { src: 'assets/img/galeria-gambas.jpg',    alt: 'Gambas frescas servidas com limão', cls: 'gallery__item--tall' },
    { src: 'assets/img/galeria-grelhados.jpg', alt: 'Espetadas grelhadas na brasa' },
    { src: 'assets/img/galeria-interior.jpg',  alt: 'Ambiente interior do restaurante', cls: 'gallery__item--wide' },
    { src: 'assets/img/galeria-peixe.jpg',     alt: 'Posta de peixe grelhada' },
    { src: 'assets/img/galeria-salmao.jpg',    alt: 'Peixe grelhado com legumes', cls: 'gallery__item--tall' },
    { src: 'assets/img/galeria-entradas.jpg',  alt: 'Entradas e saladas da casa', cls: 'gallery__item--wide' },
    { src: 'assets/img/galeria-vinhos.jpg',    alt: 'Seleção de vinhos' },
    { src: 'assets/img/galeria-carne.jpg',     alt: 'Prato de carne grelhada' },
];

document.addEventListener('DOMContentLoaded', () => {

    /* ===== Ano no footer ===== */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* ===== Navegação mobile ===== */
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    const closeNav = () => {
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
    };

    navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        document.body.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

    /* ===== Logo e "Início" → topo absoluto (mostra a topbar, não fica oculto) ===== */
    /* (exclui o skip-link, que mantém o salto+foco para acessibilidade) */
    document.querySelectorAll('.brand, a.nav__link[href="#inicio"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            closeNav();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.replaceState(null, '', location.pathname + location.search);
        });
    });

    /* ===== Header com sombra ao scroll ===== */
    const header = document.getElementById('header');
    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        document.getElementById('toTop').classList.toggle('show', window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ===== Botão voltar ao topo ===== */
    document.getElementById('toTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ===== Ementa: tabs + render ===== */
    const tabsEl = document.getElementById('menuTabs');
    const panelEl = document.getElementById('menuPanel');

    const renderMenu = key => {
        const cat = MENU[key];
        let html = '';
        if (cat.note) html += `<p class="menu__intro-note"></p>`;
        cat.groups.forEach(group => {
            html += `<div class="menu-group"><h3 class="menu-group__title">${group.title}</h3>`;
            if (cat.note) html += `<p class="menu-group__note">${cat.note}</p>`;
            group.items.forEach(([name, price, sub]) => {
                html += `<div class="menu-item">
                    <span class="menu-item__name">${name}${sub ? ` <small>(${sub})</small>` : ''}</span>
                    <span class="menu-item__price">${price}</span>
                </div>`;
            });
            html += `</div>`;
        });
        panelEl.innerHTML = html;
    };

    Object.keys(MENU).forEach((key, i) => {
        const btn = document.createElement('button');
        btn.className = 'menu-tab' + (i === 0 ? ' active' : '');
        btn.textContent = MENU[key].label;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        btn.addEventListener('click', () => {
            tabsEl.querySelectorAll('.menu-tab').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            renderMenu(key);
        });
        tabsEl.appendChild(btn);
    });
    renderMenu(Object.keys(MENU)[0]);

    /* ===== Galeria ===== */
    const grid = document.getElementById('galleryGrid');
    GALLERY.forEach(img => {
        const fig = document.createElement('button');
        fig.className = 'gallery__item' + (img.cls ? ' ' + img.cls : '');
        fig.setAttribute('aria-label', `Ampliar imagem: ${img.alt}`);
        fig.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
        fig.addEventListener('click', () => openLightbox(img.src, img.alt));
        grid.appendChild(fig);
    });

    /* ===== Lightbox ===== */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox || e.target.classList.contains('lightbox__close')) closeLightbox();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    /* ===== Reveal ao scroll ===== */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    /* ===== Nav link ativo conforme secção ===== */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(s => spy.observe(s));
    }

    /* ===== Formulário de reservas (Email via Web3Forms + WhatsApp) ===== */
    // CONFIG — substituir pela Access Key obtida em https://web3forms.com
    const WEB3FORMS_KEY = 'COLAR_AQUI_A_ACCESS_KEY';
    const WHATSAPP_NUMBER = '351935136629'; // número de WhatsApp (com indicativo, sem +)

    const form = document.getElementById('reserveForm');
    const status = document.getElementById('reserveStatus');
    const dateInput = document.getElementById('r-data');
    const waBtn = document.getElementById('reserveWhats');

    const resetDateMin = () => { dateInput.min = new Date().toISOString().split('T')[0]; };
    resetDateMin(); // impede datas passadas

    const val = n => (form.elements[n] ? form.elements[n].value.trim() : '');
    const setStatus = (type, msg) => {
        status.className = 'reserve__form-note' + (type ? ' ' + type : '');
        status.textContent = msg;
    };
    const validate = () => {
        let ok = true;
        form.querySelectorAll('[required]').forEach(f => {
            const good = f.value.trim() !== '';
            f.classList.toggle('invalid', !good);
            if (!good) ok = false;
        });
        return ok;
    };

    /* --- Enviar por EMAIL (Web3Forms) --- */
    form.addEventListener('submit', async e => {
        e.preventDefault();
        setStatus('', '');
        if (!validate()) { setStatus('err', 'Por favor preencha os campos obrigatórios (*).'); return; }

        if (WEB3FORMS_KEY.indexOf('COLAR') === 0) {
            setStatus('err', 'O envio por email ainda não foi ativado. Use o botão do WhatsApp abaixo.');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const label = submitBtn.textContent;
        submitBtn.disabled = true; submitBtn.textContent = 'A enviar…';

        const data = new FormData(form);
        data.append('access_key', WEB3FORMS_KEY);
        data.append('subject', 'Nova reserva — Portal da Ribeirada');
        data.append('from_name', 'Site Portal da Ribeirada');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST', headers: { Accept: 'application/json' }, body: data
            });
            const json = await res.json();
            if (json.success) {
                const nome = val('nome').split(' ')[0];
                setStatus('ok', `Obrigado, ${nome}! Pedido de reserva enviado — entraremos em contacto para confirmar.`);
                form.reset(); resetDateMin();
            } else {
                setStatus('err', 'Não foi possível enviar. Tente novamente ou use o WhatsApp.');
            }
        } catch (err) {
            setStatus('err', 'Erro de ligação. Tente novamente ou use o WhatsApp.');
        } finally {
            submitBtn.disabled = false; submitBtn.textContent = label;
        }
    });

    /* --- Enviar por WHATSAPP --- */
    if (waBtn) waBtn.addEventListener('click', () => {
        setStatus('', '');
        if (!validate()) { setStatus('err', 'Por favor preencha os campos obrigatórios (*).'); return; }
        const linhas = [
            'Olá! Gostaria de fazer uma reserva no Portal da Ribeirada:',
            '',
            `Nome: ${val('nome')}`,
            `Telefone: ${val('telefone')}`,
            val('email') ? `Email: ${val('email')}` : null,
            `Data: ${val('data')}`,
            `Hora: ${val('hora')}`,
            `Pessoas: ${val('pessoas')}`,
            val('mensagem') ? `Observações: ${val('mensagem')}` : null
        ].filter(Boolean).join('\n');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas)}`, '_blank', 'noopener');
        setStatus('ok', 'A abrir o WhatsApp com a sua reserva… carregue em enviar para concluir.');
    });

    form.querySelectorAll('input, select, textarea').forEach(f => {
        f.addEventListener('input', () => f.classList.remove('invalid'));
    });
});
