"use client";
import React, { useState, useRef } from "react";
import {
  Server, Zap, Cpu, Boxes, Rocket, Wallet, Users,
  Crown, Sparkles, Globe, Coins, Vote, Wrench, Trophy,
  Layers, Network, ShieldCheck, Cloud, Download, MonitorSmartphone,
  PiggyBank, Hammer, Gem, Flame, Banknote, Swords, Volume2, VolumeX
} from "lucide-react";

/* ============================ THEME ============================ */
const C = {
  bg: "#05070E",
  bg2: "#080B16",
  panel: "rgba(16,23,40,0.72)",
  panelHi: "rgba(20,29,50,0.85)",
  line: "rgba(124,146,190,0.16)",
  text: "#EAEFFA",
  sub: "#9DAAC6",
  faint: "#69748F",
  cyan: "#22D3EE",
  emerald: "#34D399",
  violet: "#A78BFA",
  amber: "#FBBF24",
};

const FONT_DISPLAY = "'Chakra Petch', system-ui, sans-serif";
const FONT_BODY = "'Manrope', system-ui, sans-serif";

const glow = (hex, a = 0.22) =>
  `0 0 0 1px ${hex}33, 0 24px 64px -22px ${hex}${Math.round(a * 255).toString(16).padStart(2, "0")}`;

/* ============================ ATOMS ============================ */
function Badge({ children, color = C.cyan }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase"
      style={{
        fontFamily: FONT_DISPLAY, color,
        background: `${color}18`, border: `1px solid ${color}55`,
        letterSpacing: "0.06em", backdropFilter: "blur(4px)",
      }}
    >
      {children}
    </span>
  );
}

function Kicker({ children, color = C.cyan, n }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        style={{
          fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13, color: "#04060C",
          background: color, borderRadius: 8, padding: "3px 9px",
          boxShadow: `0 0 18px ${color}88`, letterSpacing: "0.08em",
        }}
      >
        {n}
      </span>
      <span className="text-xs font-bold uppercase" style={{ fontFamily: FONT_DISPLAY, color, letterSpacing: "0.24em" }}>
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${color}55, transparent)` }} />
    </div>
  );
}

function IconChip({ icon: Icon, color, size = 46 }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl shrink-0"
      style={{
        width: size, height: size,
        background: `linear-gradient(145deg, ${color}26, ${color}08)`,
        border: `1px solid ${color}46`,
        boxShadow: `inset 0 1px 0 ${color}33, inset 0 0 24px ${color}1a`,
      }}
    >
      <Icon size={size * 0.46} color={color} strokeWidth={2} />
    </div>
  );
}

function Voxel({ color, size, top, left, right, delay, opacity = 0.5, dur = 9 }) {
  return (
    <div
      className="voxel no-print"
      style={{
        position: "absolute", top, left, right, width: size, height: size,
        background: `linear-gradient(135deg, ${color}, ${color}22)`,
        border: `1px solid ${color}aa`, borderRadius: 6, opacity,
        boxShadow: `0 0 30px ${color}66`, transform: "rotate(18deg)",
        animation: `floaty ${dur}s ease-in-out ${delay}s infinite`, pointerEvents: "none",
      }}
    />
  );
}

/* ============================ DECK ============================ */
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ background: C.bg, fontFamily: FONT_BODY, color: C.text, minHeight: "100vh", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        .deck { max-width: 940px; margin: 0 auto; position: relative; }
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .gridFeat { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .avoid { break-inside: avoid; page-break-inside: avoid; }
        @keyframes rise { from { opacity:0; transform: translateY(22px);} to {opacity:1; transform:translateY(0);} }
        @keyframes floaty { 0%,100%{transform:translateY(0) rotate(18deg);} 50%{transform:translateY(-16px) rotate(24deg);} }
        @keyframes pulseGlow { 0%,100%{opacity:.55;} 50%{opacity:1;} }
        .reveal { animation: rise .7s cubic-bezier(.2,.7,.2,1) both; }
        @media (max-width: 760px) {
          .grid2, .gridFeat { grid-template-columns: 1fr; }
          .voxel, .vsBar { display: none !important; }
        }
        @media print {
          html, body { background: ${C.bg} !important; }
          .deck { max-width: 100%; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .avoid { break-inside: avoid; page-break-inside: avoid; }
          .pagebreak { page-break-before: always; }
          .reveal { animation: none !important; }
          .no-print { display: none !important; }
          @page { size: A4; margin: 11mm; }
        }
      `}</style>

      {/* Audio Player Button (Fixed Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 no-print" style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50 }}>
        <button 
          onClick={toggleAudio}
          style={{
            display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderRadius: "999px",
            background: isPlaying ? `${C.emerald}22` : `${C.panelHi}`,
            border: `1px solid ${isPlaying ? C.emerald : C.faint}55`,
            boxShadow: isPlaying ? `0 0 20px ${C.emerald}33` : `0 4px 12px rgba(0,0,0,0.4)`,
            color: isPlaying ? C.emerald : C.text,
            backdropFilter: "blur(10px)", cursor: "pointer", transition: "all 0.3s ease"
          }}
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 13, letterSpacing: "0.05em" }}>
            {isPlaying ? "C418 - Subwoofer Lullaby" : "Play Music"}
          </span>
        </button>
        <audio ref={audioRef} loop src="./C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3" />
      </div>

      <div
        style={{
          position: "relative",
          background:
            `radial-gradient(1000px 520px at 82% -10%, ${C.violet}24, transparent 60%),` +
            `radial-gradient(900px 520px at 8% 2%, ${C.cyan}1f, transparent 58%),` +
            `radial-gradient(820px 560px at 60% 104%, ${C.emerald}18, transparent 60%),` +
            `linear-gradient(${C.bg}, ${C.bg2})`,
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              `linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(circle at 50% 28%, black, transparent 88%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 28%, black, transparent 88%)",
          }}
        />

        <div className="deck" style={{ padding: "48px 28px 64px" }}>
          <Voxel color={C.cyan} size={34} top={70} left={-6} delay={0} dur={8} opacity={0.45} />
          <Voxel color={C.violet} size={22} top={150} right={4} delay={1.5} dur={10} opacity={0.55} />
          <Voxel color={C.emerald} size={16} top={300} left={20} delay={0.6} dur={7} opacity={0.4} />
          <Voxel color={C.amber} size={20} top={40} right={70} delay={2.2} dur={9} opacity={0.35} />

          {/* HERO */}
          <header className="avoid reveal" style={{ marginBottom: 46, position: "relative" }}>
            <div className="flex flex-wrap items-center gap-2 mb-7" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <Badge color={C.cyan}><Globe size={13} /> Crossplay</Badge>
              <Badge color={C.emerald}><Zap size={13} /> Laggfrei</Badge>
              <Badge color={C.violet}><Boxes size={13} /> Mods ohne Download</Badge>
            </div>

            <div className="flex items-center gap-2 mb-5" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", color: C.faint, fontFamily: FONT_DISPLAY, letterSpacing: "0.36em", fontSize: 11, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: C.emerald, boxShadow: `0 0 12px ${C.emerald}`, animation: "pulseGlow 2.4s infinite" }} />
              SERVER IST ONLINE · BEREIT ZUM JOINEN
            </div>

            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, lineHeight: 0.96, fontSize: 62, margin: 0, letterSpacing: "-0.015em", textShadow: `0 0 60px ${C.cyan}22` }}>
              <span style={{ color: C.text }}>PROJEKT:</span><br />
              <span style={{ background: `linear-gradient(100deg, ${C.cyan}, ${C.emerald} 46%, ${C.violet})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: `drop-shadow(0 4px 30px ${C.violet}44)` }}>
                NEXTGEN SERVER
              </span>
            </h1>

            <p style={{ color: C.sub, fontSize: 18.5, marginTop: 20, maxWidth: 660, lineHeight: 1.55 }}>
              Das ultimative <strong style={{ color: C.text }}>„Join &amp; Play"</strong>-Erlebnis ist live. Ein riesiges
              Minecraft-Abenteuer mit Maschinen, Magie und MMO-Skills –
              <strong style={{ color: C.emerald }}> und das rein serverseitig! Niemand muss etwas herunterladen, auch Konsolenspieler können dank Crossplay sofort mitzocken.</strong>
            </p>
          </header>

          {/* 1 · VERBINDUNGSDATEN & RELEASES */}
          <section className="avoid reveal" style={{ marginBottom: 44, animationDelay: "0.05s" }}>
            <Kicker n="01" color={C.cyan}>Verbindungsdaten & Releases</Kicker>
            
            <div style={{ borderRadius: 18, padding: 24, background: `linear-gradient(160deg, ${C.panelHi}, ${C.panel})`, border: `1px solid ${C.cyan}38`, boxShadow: glow(C.cyan, 0.16), marginBottom: 20 }}>
              <div className="flex items-center gap-4 mb-4" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <IconChip icon={Network} color={C.cyan} size={50} />
                <div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22, color: C.text }}>Server-IPs</div>
                  <div style={{ color: C.sub, fontSize: 14 }}>Trage eine dieser Adressen ein, um dem Server beizutreten.</div>
                </div>
              </div>
              
              <div className="grid2" style={{ marginTop: 24 }}>
                <div style={{ background: `${C.cyan}12`, border: `1px solid ${C.cyan}33`, padding: 16, borderRadius: 12 }}>
                  <div style={{ color: C.faint, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 4 }}>Haupt-IP</div>
                  <div style={{ color: C.sub, fontSize: 13, marginBottom: 8 }}>Bei Serveradresse (Server Address) tippst du genau das hier ein:</div>
                  <div style={{ color: C.text, fontSize: 18, fontFamily: FONT_DISPLAY, fontWeight: 700, background: 'rgba(0,0,0,0.3)', padding: '6px 12px', borderRadius: 6, display: 'inline-block' }}>Umutcan_Emre.exaroton.me:28198</div>
                </div>
                <div style={{ background: `${C.panel}`, border: `1px solid ${C.line}`, padding: 16, borderRadius: 12 }}>
                  <div style={{ color: C.faint, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 4 }}>Backup-IP (Dynamisch)</div>
                  <div style={{ color: C.text, fontSize: 18, fontFamily: FONT_DISPLAY, fontWeight: 600 }}>margay.exaroton.host:28198</div>
                  <div style={{ color: C.amber, fontSize: 14, marginTop: 4, fontFamily: FONT_DISPLAY, fontWeight: 700 }}>Port: 28198</div>
                </div>
              </div>
            </div>

            <div className="gridFeat">
              <Card accent={C.violet} icon={MonitorSmartphone} title="PC (Java Edition)"
                body='Muss explizit auf Version 1.21.4 laufen. Gehe im Minecraft Launcher auf "Installationen" -> "Neue Installation" und wähle unter Version "release 1.21.4" aus.'
                pills={[["Version 1.21.4", C.violet], ["Java", C.violet]]} />
              <Card accent={C.emerald} icon={Globe} title="Konsole / Mobile (Bedrock)"
                body="Einfach die aktuellste Minecraft-Version starten. Unter Server hinzufügen die IP eingeben und den Standard-Port unbedingt auf 28198 ändern."
                pills={[["Aktuellste Version", C.emerald], ["Port: 28198", C.emerald]]} />
            </div>
          </section>

          {/* 2 · DIE 4 IN-GAME KERN-SYSTEME */}
          <section className="reveal" style={{ marginBottom: 40, animationDelay: "0.1s" }}>
            <Kicker n="02" color={C.violet}>Die 4 In-Game Kern-Systeme</Kicker>
            <p style={{ color: C.sub, fontSize: 15, marginTop: -6, marginBottom: 22, maxWidth: 680, lineHeight: 1.55 }}>
              Unser Server bietet vier tiefgreifende Systeme, die das Vanilla-Erlebnis massiv erweitern. Alles läuft direkt auf dem Server – kein Modpack nötig.
            </p>

            <div className="grid2">
              <Card accent={C.emerald} icon={Cpu} title="[ System 01 ] Industrielle Revolution"
                body="Slimefun 4 bringt über 500 neue Items ins Spiel. Baue automatische Fabriken, errichte komplexe Frachtnetze, nutze neue Stromgeneratoren und sogar nukleare Reaktoren – alles direkt im Survival-Modus."
                pills={[["Slimefun 4", C.emerald], ["500+ Items", C.emerald]]} />
                
              <Card accent={C.violet} icon={Sparkles} title="[ System 02 ] Aktive Kampfmagie"
                body="Mit dem Magic-System schmiedet ihr Zauberstäbe und lernt aktive Spells. Nutzt Telekinese, zieht mächtige Schutzschilde hoch oder hebelt die Schwerkraft komplett aus."
                pills={[["Magic", C.violet], ["Zauberstäbe & Spells", C.violet]]} />

              <Card accent={C.cyan} icon={Crown} title="[ System 03 ] MMO Progression"
                body="Dank AuraSkills levelt jede eurer Aktionen den Charakter. Schaltet permanente Boni wie zusätzliche Herzen, erhöhten kritischen Schaden und spezielle Abklingzeiten frei."
                pills={[["AuraSkills", C.cyan], ["RPG-Elemente", C.cyan]]} />

              <Card accent={C.amber} icon={Users} title="[ System 04 ] Social Interaction"
                body="Volle Freiheit für Chaos mit GSit. Setzt euch gegenseitig auf den Kopf, tragt eure Kumpels huckepack oder nutzt den Befehl /crawl, um flach auf dem Bauch durch enge Gänge zu kriechen."
                pills={[["GSit", C.amber], ["/crawl & Trolling", C.amber]]} />
            </div>
          </section>

          {/* FOOTER */}
          <footer className="avoid" style={{ borderTop: `1px solid ${C.line}`, paddingTop: 18, marginTop: 30, color: C.faint, fontSize: 12.5 }}>
            <div className="flex flex-wrap items-center justify-between gap-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <span style={{ fontFamily: FONT_DISPLAY, letterSpacing: "0.12em" }}>PROJEKT NEXTGEN · SERVER LAUNCH</span>
              <span className="flex items-center gap-2" style={{ display: "flex", alignItems: "center", gap: "8px" }}><ShieldCheck size={14} color={C.emerald} /> Keine Mod-Installation · 100 % Join &amp; Play</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

/* ============================ MOLECULES ============================ */
function Card({ accent, icon, title, body, pills }) {
  return (
    <div className="avoid" style={{ borderRadius: 18, padding: 22, background: C.panel, border: `1px solid ${accent}33`, backdropFilter: "blur(6px)", boxShadow: glow(accent, 0.1) }}>
      <div className="flex items-center gap-3 mb-3" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <IconChip icon={icon} color={accent} />
        <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, margin: 0, color: C.text }}>{title}</h3>
      </div>
      <p style={{ color: C.sub, fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>{body}</p>
      <div className="flex flex-wrap gap-2" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
        {pills.map(([t, c], i) => <Badge key={i} color={c}>{t}</Badge>)}
      </div>
    </div>
  );
}

