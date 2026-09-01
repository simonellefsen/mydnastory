import { motherlineFork } from "@/lib/kinship";

export function MotherlineFork() {
  const { shared, pernille, helle } = motherlineFork;

  return (
    <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
        <p className="kicker">They do not share a recent motherline</p>
        <p className="mt-4 leading-relaxed text-muted">
          Mitochondria come from the mother. Helle is the father’s mother, so her
          H1e1b1f1 line did not pass to Pernille. Pernille’s H10a1u comes from her
          own mother’s line. The two threads only meet at haplogroup {shared.id},
          around {shared.when}.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 p-6">
        <svg viewBox="0 0 400 220" className="w-full" role="img" aria-label="Motherline fork at haplogroup H">
          <line x1="200" y1="24" x2="200" y2="88" stroke="#d4a054" strokeWidth="2" />
          <line x1="200" y1="88" x2="90" y2="150" stroke="#c45c6a" strokeWidth="2" />
          <line x1="200" y1="88" x2="310" y2="150" stroke="#7ec8a3" strokeWidth="2" />
          <circle cx="200" cy="28" r="10" fill="#d4a054" />
          <circle cx="90" cy="160" r="10" fill="#c45c6a" />
          <circle cx="310" cy="160" r="10" fill="#7ec8a3" />
          <text x="200" y="52" textAnchor="middle" fill="#f3eee4" fontSize="14">
            {shared.id} · {shared.when}
          </text>
          <text x="90" y="190" textAnchor="middle" fill="#f3eee4" fontSize="13">
            Pernille
          </text>
          <text x="90" y="208" textAnchor="middle" fill="#b7b0a4" fontSize="11">
            {pernille.id}
          </text>
          <text x="310" y="190" textAnchor="middle" fill="#f3eee4" fontSize="13">
            Helle
          </text>
          <text x="310" y="208" textAnchor="middle" fill="#b7b0a4" fontSize="11">
            {helle.id}
          </text>
        </svg>
        <p className="mt-2 text-center text-sm text-muted">
          {shared.place}. Then the lines split: {pernille.via} versus {helle.via}.
        </p>
      </div>
    </div>
  );
}
