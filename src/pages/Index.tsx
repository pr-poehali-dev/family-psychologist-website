import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/7bb47fac-15db-4b75-a5fb-b145667bf9d3/files/2c00de6b-6ff1-4ac6-ba17-4e22f8264604.jpg";

const services = [
  {
    icon: "Heart",
    title: "Семейный психолог",
    subtitle: "Гармония в семье",
    description:
      "Работа с семьёй как системой: улучшение взаимопонимания между членами семьи, разрешение конфликтов, выстраивание здоровых границ. Помогаю восстановить доверие и создать атмосферу безопасности в доме.",
    duration: "60 мин",
    price: "от 4 000 ₽",
  },
  {
    icon: "Users",
    title: "Супружеский психолог",
    subtitle: "Крепкий союз",
    description:
      "Консультации для пар: работа с кризисами в отношениях, ревностью, изменами, потерей близости. Помогаю парам найти общий язык и вернуть тепло в отношения — или осознанно завершить их.",
    duration: "75 мин",
    price: "от 5 000 ₽",
  },
  {
    icon: "User",
    title: "Индивидуальный терапевт",
    subtitle: "Личностный рост",
    description:
      "Индивидуальная терапия для взрослых: тревожность, депрессия, низкая самооценка, проблемы в отношениях с собой и другими. Работаю в когнитивно-поведенческом и системном подходах.",
    duration: "50 мин",
    price: "от 3 500 ₽",
  },
  {
    icon: "UsersRound",
    title: "Терапевтическая группа",
    subtitle: "Сила сообщества",
    description:
      "Групповая работа в малых группах до 8 человек. Уникальный формат, где участники получают поддержку, учатся на опыте друг друга и обнаруживают, что они не одни в своих переживаниях.",
    duration: "90 мин",
    price: "от 1 500 ₽",
  },
];

const credentials = [
  { value: "16+", label: "лет практики" },
  { value: "800+", label: "клиентов" },
  { value: "3", label: "образования" },
  { value: "КПТ", label: "основной метод" },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Golos Text', sans-serif",
        background: "#F8F7F4",
        color: "#1A1A2E",
        minHeight: "100vh",
      }}
    >
      <style>{`
        :root {
          --navy: #1A1A2E;
          --navy-light: #16213E;
          --gold: #C9A96E;
          --gold-light: #E8D5B0;
          --cream: #F8F7F4;
          --cream-dark: #EFEDE8;
          --text-muted: #6B6B7B;
        }
        * { box-sizing: border-box; }
        .font-display { font-family: 'Cormorant', Georgia, serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .fade-up-1 { animation: fadeUp 0.8s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.8s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.8s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.8s 0.6s ease both; }
        .fade-in { animation: fadeIn 1.2s ease both; }

        .nav-link {
          color: rgba(248,247,244,0.8);
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s;
        }
        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after { width: 100%; }

        .service-card {
          background: white;
          border: 1px solid #E8E5DE;
          border-radius: 2px;
          padding: 36px 32px;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 0;
          background: var(--gold);
          transition: height 0.4s ease;
        }
        .service-card:hover::before { height: 100%; }
        .service-card:hover {
          border-color: var(--gold-light);
          box-shadow: 0 8px 40px rgba(26,26,46,0.08);
          transform: translateY(-3px);
        }

        .btn-primary {
          background: var(--navy);
          color: var(--cream);
          border: none;
          padding: 14px 36px;
          font-family: 'Golos Text', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .btn-primary:hover {
          background: #0F2647;
          box-shadow: 0 6px 24px rgba(26,26,46,0.3);
          transform: translateY(-1px);
        }

        .btn-outline {
          background: transparent;
          color: rgba(248,247,244,0.9);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 14px 36px;
          font-family: 'Golos Text', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .btn-outline:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .input-field {
          width: 100%;
          border: 1px solid #D8D5CE;
          border-radius: 2px;
          padding: 13px 16px;
          font-family: 'Golos Text', sans-serif;
          font-size: 15px;
          background: white;
          color: var(--navy);
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus { border-color: var(--gold); }
        .input-field::placeholder { color: #B0ADA8; }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 12px;
          display: block;
        }

        .divider-gold {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 20px 0;
        }

        .credential-item {
          text-align: center;
          padding: 32px 24px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .credential-item:last-child { border-right: none; }

        @media (max-width: 900px) {
          .hero-photo { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .credentials-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .credential-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          background: "var(--navy)",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 1px 0 rgba(201,169,110,0.15)",
        }}
      >
        <div
          className="font-display"
          style={{ color: "var(--cream)", fontSize: 20, fontWeight: 400, letterSpacing: "0.04em" }}
        >
          Тубулбаева<span style={{ color: "var(--gold)", marginLeft: 8 }}>Диана</span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <span className="nav-link" onClick={() => scrollTo("about")}>Обо мне</span>
          <span className="nav-link" onClick={() => scrollTo("services")}>Услуги</span>
          <span className="nav-link" onClick={() => scrollTo("contact")}>Контакты</span>
          <button className="btn-outline" style={{ padding: "9px 22px", fontSize: 12 }} onClick={() => scrollTo("contact")}>
            Записаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(140deg, #0F2647 0%, #1A1A2E 55%, #16213E 100%)",
          minHeight: "91vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(ellipse at 65% 50%, rgba(201,169,110,0.07) 0%, transparent 55%)",
          }}
        />

        <div
          className="hero-photo fade-in"
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(420px, 38vw)",
            height: "min(540px, 50vw)",
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid rgba(201,169,110,0.2)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={PHOTO_URL}
            alt="Тубулбаева Диана"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(15,38,71,0.7), transparent)" }} />
        </div>

        <div style={{ maxWidth: 560, position: "relative", zIndex: 1 }}>
          <span className="section-label fade-up-1">Психолог · Терапевт · Челябинск</span>
          <h1
            className="font-display fade-up-2"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(44px, 6.5vw, 80px)",
              fontWeight: 300,
              lineHeight: 1.05,
              margin: "0 0 4px 0",
            }}
          >
            Тубулбаева
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Диана</em>
          </h1>

          <div className="fade-up-2" style={{ width: 60, height: 1, background: "var(--gold)", margin: "24px 0 28px" }} />

          <p
            className="fade-up-3"
            style={{
              color: "rgba(248,247,244,0.72)",
              fontSize: 18,
              lineHeight: 1.75,
              marginBottom: 44,
              maxWidth: 460,
            }}
          >
            Семейный и супружеский психолог. Помогаю парам и семьям
            восстановить близость, разрешить конфликты и построить
            устойчивые, тёплые отношения.
          </p>

          <div className="fade-up-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Записаться на консультацию
            </button>
            <button className="btn-outline" onClick={() => scrollTo("services")}>
              Смотреть услуги
            </button>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ background: "#16213E" }}>
        <div
          className="credentials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {credentials.map((c, i) => (
            <div className="credential-item" key={i}>
              <div
                className="font-display"
                style={{ color: "var(--gold)", fontSize: 44, fontWeight: 500, lineHeight: 1 }}
              >
                {c.value}
              </div>
              <div style={{ color: "rgba(248,247,244,0.5)", fontSize: 13, marginTop: 10, letterSpacing: "0.05em" }}>
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", background: "var(--cream)" }}>
        <div
          className="about-grid"
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <div>
            <span className="section-label">Обо мне</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 24px 0", color: "var(--navy)" }}
            >
              Более 16 лет
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>практики</em>
            </h2>
            <div className="divider-gold" />
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
              Я работаю с парами и семьями, помогая им преодолевать кризисы и выстраивать
              здоровые отношения. За 16 лет практики мой подход стал основан на когнитивно-поведенческой
              терапии и системном семейном подходе — методах с доказанной эффективностью.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: 16, marginBottom: 36 }}>
              За годы практики я помогла более 800 клиентам найти путь к себе и
              к близким людям. Каждая история уникальна — и я подхожу к ней именно так.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Сертифицированный семейный психотерапевт",
                "Член Российского психологического общества",
                "Регулярная супервизия и личная терапия",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon name="CheckCircle" size={18} />
                  <span style={{ color: "var(--navy)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--cream-dark)",
              border: "1px solid #E2DEDD",
              borderRadius: 2,
              padding: 48,
            }}
          >
            <span className="section-label">Образование</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              {[
                {
                  year: "2012",
                  title: "Московский государственный университет",
                  desc: "Факультет психологии, специальность «Клиническая психология»",
                },
                {
                  year: "2015",
                  title: "Институт практической психологии",
                  desc: "Системная семейная терапия, сертификационная программа",
                },
                {
                  year: "2019",
                  title: "Академия КПТ",
                  desc: "Когнитивно-поведенческая терапия, международный сертификат",
                },
              ].map((edu, i) => (
                <div key={i} style={{ display: "flex", gap: 20 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 52,
                      height: 52,
                      background: "var(--navy)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {edu.year}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: 15, marginBottom: 5 }}>
                      {edu.title}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>{edu.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 5%", background: "var(--cream-dark)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-label">Направления работы</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 400, color: "var(--navy)", margin: "0 0 16px 0" }}
            >
              Услуги и форматы
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 480, margin: "0 auto" }}>
              Каждая консультация адаптируется под ваш запрос
            </p>
          </div>

          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          >
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div
                    style={{
                      width: 48, height: 48,
                      background: "var(--cream-dark)",
                      border: "1px solid #E2DEDD",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600 }}>
                    {s.subtitle}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: 26, fontWeight: 500, color: "var(--navy)", margin: "0 0 12px 0" }}
                >
                  {s.title}
                </h3>

                <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                  {s.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                    borderTop: "1px solid #EAE7E0",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="Clock" size={15} />
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{s.duration}</span>
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: 16 }}>
                    {s.price}
                  </div>
                </div>

                <button
                  className="btn-primary"
                  style={{ width: "100%", fontSize: 12 }}
                  onClick={() => scrollTo("contact")}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        style={{
          background: "var(--navy)",
          padding: "88px 5%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 65%)" }} />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <div className="font-display" style={{ fontSize: 80, color: "var(--gold)", opacity: 0.25, lineHeight: 0.4, marginBottom: 28 }}>
            "
          </div>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              color: "var(--cream)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.55,
              margin: "0 0 28px 0",
            }}
          >
            Каждая семья имеет свой уникальный язык.
            Моя задача — помочь вам снова услышать друг друга.
          </p>
          <span style={{ color: "var(--gold)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            — Диана Тубулбаева
          </span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", background: "var(--cream)" }}>
        <div
          className="contact-grid"
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          <div>
            <span className="section-label">Запись на консультацию</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 400, color: "var(--navy)", margin: "0 0 24px 0", lineHeight: 1.15 }}
            >
              Сделайте первый
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>шаг</em>
            </h2>
            <div className="divider-gold" />
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 44 }}>
              Заполните форму — я свяжусь с вами в течение 24 часов для
              согласования времени консультации. Первая встреча — знакомство
              и обсуждение вашего запроса.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { icon: "Phone", text: "+7 (908) 492-71-31", href: "tel:+79084927131" },
                { icon: "MapPin", text: "Челябинск, ул. Елькина, 79", href: null },
                { icon: "Clock", text: "Пн–Пт: 10:00–20:00, Сб: 10:00–17:00", href: null },
                { icon: "ExternalLink", text: "ВКонтакте: di_familypsy", href: "https://vk.com/di_familypsy" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42, height: 42,
                      background: "var(--cream-dark)",
                      border: "1px solid #E2DEDD",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={item.icon} size={17} />
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)", fontSize: 15, textDecoration: "none", borderBottom: "1px solid var(--gold)" }}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "var(--navy)", fontSize: 15 }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #E8E5DE", borderRadius: 2, padding: 48 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Спасибо! Я свяжусь с вами в ближайшее время.");
                setFormData({ name: "", phone: "", service: "", message: "" });
              }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--navy)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Ваше имя *
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--navy)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Телефон *
                </label>
                <input
                  className="input-field"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--navy)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Интересующая услуга
                </label>
                <select
                  className="input-field"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ appearance: "none", cursor: "pointer" }}
                >
                  <option value="">Выберите услугу</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--navy)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Ваш запрос
                </label>
                <textarea
                  className="input-field"
                  placeholder="Кратко опишите, с чем хотите поработать..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: "none" }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ marginTop: 8, width: "100%", padding: "16px" }}>
                Отправить заявку
              </button>

              <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy)", padding: "40px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="font-display" style={{ color: "var(--cream)", fontSize: 18, fontWeight: 400, marginBottom: 4 }}>
              Тубулбаева <span style={{ color: "var(--gold)" }}>Диана</span>
            </div>
            <div style={{ color: "rgba(248,247,244,0.4)", fontSize: 13 }}>Семейный и супружеский психолог</div>
          </div>
          <div style={{ color: "rgba(248,247,244,0.35)", fontSize: 13 }}>
            © 2026 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}