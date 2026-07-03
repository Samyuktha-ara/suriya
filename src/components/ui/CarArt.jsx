/**
 * CarArt — self-contained premium SVG car illustrations.
 * Ships with the bundle (no network image requests) so LCP stays fast
 * and there are never any broken image links.
 *
 * Each model maps to a body silhouette + an accent gradient. Descriptive,
 * keyword-rich <title>/<desc> double as accessible alt text for SEO.
 */

const THEMES = {
  fronx: { a: '#7b5cff', b: '#00d0ff', body: 'suv' },
  baleno: { a: '#4f7bff', b: '#00d0ff', body: 'hatch' },
  grandvitara: { a: '#e7b96a', b: '#ff8a3d', body: 'suv' },
  jimny: { a: '#3ddc84', b: '#00d0ff', body: 'offroad' },
  invicto: { a: '#b07bff', b: '#7b5cff', body: 'mpv' },
  xl6: { a: '#ff6b9d', b: '#7b5cff', body: 'mpv' },
  ignis: { a: '#ffd23d', b: '#ff8a3d', body: 'hatch' },
}

/* Body silhouette paths on a 600×260 canvas (baseline y≈210). */
const BODIES = {
  suv: 'M40 200 L70 200 C74 200 78 197 80 193 L96 158 C104 143 118 134 135 132 L300 120 C332 118 360 126 384 146 L430 176 C440 182 452 186 464 187 L520 192 C536 194 548 207 548 223 L548 200 Z',
  hatch:
    'M42 200 L74 200 C78 200 82 197 84 193 L102 160 C110 146 124 138 140 137 L300 128 C338 126 372 136 398 160 L444 186 C452 190 460 192 468 193 L516 196 C532 197 544 209 544 223 L544 200 Z',
  mpv: 'M38 200 L66 200 C70 200 74 197 75 193 L86 150 C92 135 106 126 123 125 L360 112 C392 110 420 120 442 142 L482 180 C490 187 500 190 510 191 L524 192 C540 194 552 207 552 223 L552 200 Z',
  offroad:
    'M44 198 L72 198 C76 198 80 195 81 191 L92 150 C97 138 108 131 122 131 L200 128 L200 118 L360 118 L360 128 L400 130 C420 132 438 142 452 158 L484 176 C492 181 502 184 512 185 L520 186 C536 188 548 201 548 217 L548 198 Z',
}

/* Greenhouse / window glass per body. */
const GLASS = {
  suv: 'M150 134 L296 124 C322 122 344 128 362 142 L392 164 L150 172 Z',
  hatch: 'M156 138 L300 130 C330 128 356 138 376 158 L400 176 L156 176 Z',
  mpv: 'M132 128 L358 114 C384 112 406 120 424 138 L456 168 L132 172 Z',
  offroad: 'M126 132 L360 122 L360 168 L126 168 Z',
}

export default function CarArt({ model = 'fronx', name = 'Suzuki car', className = '' }) {
  const theme = THEMES[model] || THEMES.fronx
  const gid = `car-grad-${model}`
  const sid = `car-shine-${model}`
  const uid = `car-under-${model}`
  const body = theme.body
  const title = `${name} — available at Suriya NEXA showroom Thanjavur`

  return (
    <svg
      className={className}
      viewBox="0 0 600 260"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <title>{title}</title>
      <desc>{`Side profile illustration of the ${name} at the NEXA Thanjavur dealership.`}</desc>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={theme.a} />
          <stop offset="1" stopColor={theme.b} />
        </linearGradient>
        <linearGradient id={sid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={uid} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={theme.a} stopOpacity="0.5" />
          <stop offset="1" stopColor={theme.a} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground glow */}
      <ellipse cx="300" cy="228" rx="250" ry="20" fill={`url(#${uid})`} />

      {/* Body */}
      <path d={BODIES[body]} fill={`url(#${gid})`} />
      {/* Body shine */}
      <path d={BODIES[body]} fill={`url(#${sid})`} opacity="0.35" />

      {/* Glass */}
      <path d={GLASS[body]} fill="#0a0a14" opacity="0.85" />
      <path d={GLASS[body]} fill={`url(#${sid})`} opacity="0.25" />
      {/* Pillar */}
      <rect x="272" y="120" width="6" height="52" fill="#0a0a14" opacity="0.7" transform="skewX(-8)" />

      {/* Door line + handle */}
      <path
        d="M180 176 L470 176"
        stroke="#0a0a14"
        strokeOpacity="0.35"
        strokeWidth="2"
        fill="none"
      />
      <rect x="300" y="182" width="26" height="5" rx="2.5" fill="#0a0a14" opacity="0.55" />

      {/* Wheels */}
      {[168, 452].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="204" r="38" fill="#0c0c16" />
          <circle cx={cx} cy="204" r="38" fill="none" stroke={theme.b} strokeWidth="2" opacity="0.5" />
          <circle cx={cx} cy="204" r="17" fill="#1a1b28" />
          <circle cx={cx} cy="204" r="17" fill="none" stroke={`url(#${gid})`} strokeWidth="3" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <rect
              key={deg}
              x={cx - 1.5}
              y="190"
              width="3"
              height="14"
              rx="1.5"
              fill={theme.b}
              opacity="0.75"
              transform={`rotate(${deg} ${cx} 204)`}
            />
          ))}
        </g>
      ))}

      {/* Headlight + taillight accents */}
      <rect x="524" y="176" width="20" height="7" rx="3.5" fill="#fff" opacity="0.9" />
      <rect x="46" y="182" width="16" height="9" rx="4" fill={theme.b} opacity="0.95" />
    </svg>
  )
}
