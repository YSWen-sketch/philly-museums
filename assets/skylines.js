// One landmark banner per city, drawn as inline SVG so the page still needs no
// build step, no image host and no network request beyond the page itself.
//
// Each drawing is two layers on a soft band of sky: `far` is the city around
// the landmark, held back to a wash, and `near` is the thing you would actually
// name if someone asked what the city looks like. Both take their colour from
// --accent, which index.html re-points per city, so the drawings follow the
// light and dark themes and the per-city palette without a second copy.
//
// The viewBox is always 1200x200 with the ground line at y=185.

const SKYLINES = {};

// Repeated rows of houses, written once rather than four times.
function terrace(x0, x1, base, seed) {
  let d = `M${x0} 185 L${x0} ${base}`;
  let x = x0, i = seed;
  while (x < x1) {
    const w = 22 + ((i * 7) % 14);
    const h = base - ((i * 11) % 16);
    d += ` L${x} ${h} L${x + w} ${h}`;
    x += w; i++;
  }
  return d + ` L${x} 185 Z`;
}

// ---------- Philadelphia: City Hall, the Art Museum, the modern towers ----------
SKYLINES.philadelphia = `
  <g class="far">
    <path d="${terrace(0, 300, 152, 3)}"/>
    <path d="${terrace(920, 1200, 150, 7)}"/>
    <rect x="640" y="96" width="34" height="89"/>
    <rect x="838" y="104" width="30" height="81"/>
    <path d="M880 185 L880 84 L906 74 L932 84 L932 185 Z"/>
  </g>
  <g class="near">
    <!-- Philadelphia Museum of Art: steps, colonnade, pediment -->
    <path d="M52 185 L64 176 L292 176 L304 185 Z"/>
    <rect x="70" y="136" width="216" height="40"/>
    <path d="M64 136 L178 104 L292 136 Z"/>
    <g class="cut">
      <rect x="86" y="146" width="9" height="30"/><rect x="110" y="146" width="9" height="30"/>
      <rect x="134" y="146" width="9" height="30"/><rect x="158" y="146" width="9" height="30"/>
      <rect x="182" y="146" width="9" height="30"/><rect x="206" y="146" width="9" height="30"/>
      <rect x="230" y="146" width="9" height="30"/><rect x="254" y="146" width="9" height="30"/>
    </g>
    <!-- Rowhouse block between the museum and City Hall -->
    <path d="${terrace(330, 470, 148, 5)}"/>
    <!-- City Hall: tower, clock, spire, William Penn on top -->
    <rect x="498" y="150" width="148" height="35"/>
    <rect x="530" y="92" width="84" height="60"/>
    <path d="M534 92 L610 92 L604 76 L540 76 Z"/>
    <path d="M545 76 L599 76 L593 54 L551 54 Z"/>
    <path d="M551 54 L593 54 L572 24 Z"/>
    <rect x="569" y="10" width="6" height="15"/>
    <circle cx="572" cy="7" r="5"/>
    <g class="cut"><circle cx="572" cy="112" r="11"/></g>
    <!-- Comcast towers -->
    <path d="M690 185 L690 46 L738 38 L738 185 Z"/>
    <rect x="710" y="14" width="5" height="26"/>
    <path d="M762 185 L762 82 L806 82 L806 185 Z"/>
    <path d="M762 82 L784 52 L806 82 Z"/>
  </g>`;

// ---------- New York: Liberty, the bridge, Empire State, Chrysler ----------
SKYLINES.newyork = `
  <g class="far">
    <path d="${terrace(430, 560, 150, 2)}"/>
    <rect x="600" y="112" width="32" height="73"/>
    <rect x="830" y="96" width="28" height="89"/>
    <rect x="1010" y="120" width="34" height="65"/>
    <path d="${terrace(1060, 1200, 148, 9)}"/>
  </g>
  <g class="near">
    <!-- Statue of Liberty -->
    <path d="M78 185 L86 168 L164 168 L172 185 Z"/>
    <path d="M96 168 L96 120 L154 120 L154 168 Z"/>
    <path d="M112 120 L112 104 L138 104 L138 120 Z"/>
    <path d="M118 104 L116 74 L134 74 L132 104 Z"/>
    <circle cx="125" cy="66" r="8"/>
    <path d="M111 62 L139 62 L136 54 L128 60 L125 50 L122 60 L114 54 Z"/>
    <path d="M133 76 L146 46 L152 48 L140 78 Z"/>
    <path d="M144 46 L158 46 L151 28 Z"/>
    <!-- Brooklyn Bridge -->
    <path d="M232 185 L232 70 L274 70 L274 185 Z"/>
    <path d="M356 185 L356 70 L398 70 L398 185 Z"/>
    <g class="cut">
      <path d="M240 142 L240 108 Q253 92 266 108 L266 142 Z"/>
      <path d="M364 142 L364 108 Q377 92 390 108 L390 142 Z"/>
    </g>
    <path d="M232 78 L274 78 L253 58 Z"/>
    <path d="M356 78 L398 78 L377 58 Z"/>
    <g class="cable span">
      <path d="M170 98 Q253 150 274 96"/>
      <path d="M274 96 Q315 146 356 96"/>
      <path d="M398 96 Q442 150 472 104"/>
      <path d="M196 118 L196 132 M222 126 L222 132 M300 126 L300 132 M330 130 L330 134
               M424 120 L424 132 M448 126 L448 132"/>
    </g>
    <rect x="170" y="132" width="302" height="7"/>
    <!-- Empire State Building -->
    <path d="M540 185 L540 100 L596 100 L596 185 Z"/>
    <path d="M550 100 L550 62 L586 62 L586 100 Z"/>
    <path d="M558 62 L558 40 L578 40 L578 62 Z"/>
    <rect x="565" y="14" width="6" height="27"/>
    <circle cx="568" cy="11" r="4"/>
    <!-- Chrysler Building -->
    <path d="M676 185 L676 96 L724 96 L724 185 Z"/>
    <path d="M676 96 Q700 68 724 96 Z"/>
    <path d="M681 84 Q700 58 719 84 Z"/>
    <path d="M686 72 Q700 50 714 72 Z"/>
    <path d="M691 60 Q700 42 709 60 Z"/>
    <g class="cut">
      <path d="M694 94 Q700 84 706 94 Z"/>
      <path d="M696 82 Q700 74 704 82 Z"/>
    </g>
    <rect x="698" y="14" width="4" height="32"/>
    <!-- One World Trade Center -->
    <path d="M890 185 L896 56 L934 56 L940 185 Z"/>
    <rect x="913" y="12" width="5" height="45"/>
  </g>`;

// ---------- Washington: the Capitol, the Monument, Lincoln ----------
SKYLINES.washington = `
  <g class="far">
    <path d="${terrace(300, 470, 158, 4)}"/>
    <path d="${terrace(1090, 1200, 160, 6)}"/>
    <rect x="500" y="140" width="40" height="45"/>
  </g>
  <g class="near">
    <!-- Lincoln Memorial -->
    <path d="M46 185 L58 174 L286 174 L298 185 Z"/>
    <rect x="66" y="120" width="212" height="54"/>
    <rect x="58" y="110" width="228" height="12"/>
    <g class="cut">
      <rect x="80" y="130" width="10" height="44"/><rect x="106" y="130" width="10" height="44"/>
      <rect x="132" y="130" width="10" height="44"/><rect x="158" y="130" width="10" height="44"/>
      <rect x="184" y="130" width="10" height="44"/><rect x="210" y="130" width="10" height="44"/>
      <rect x="236" y="130" width="10" height="44"/><rect x="256" y="130" width="10" height="44"/>
    </g>
    <!-- Washington Monument -->
    <path d="M566 185 L572 42 L598 42 L604 185 Z"/>
    <path d="M572 42 L585 16 L598 42 Z"/>
    <!-- United States Capitol -->
    <path d="M700 185 L700 150 L1040 150 L1040 185 Z"/>
    <rect x="716" y="126" width="112" height="24"/>
    <rect x="912" y="126" width="112" height="24"/>
    <g class="cut">
      <rect x="730" y="132" width="7" height="18"/><rect x="750" y="132" width="7" height="18"/>
      <rect x="770" y="132" width="7" height="18"/><rect x="790" y="132" width="7" height="18"/>
      <rect x="810" y="132" width="7" height="18"/>
      <rect x="926" y="132" width="7" height="18"/><rect x="946" y="132" width="7" height="18"/>
      <rect x="966" y="132" width="7" height="18"/><rect x="986" y="132" width="7" height="18"/>
      <rect x="1006" y="132" width="7" height="18"/>
    </g>
    <rect x="834" y="112" width="72" height="38"/>
    <path d="M830 112 L870 88 L910 112 Z"/>
    <path d="M842 88 Q870 34 898 88 Z"/>
    <rect x="838" y="84" width="64" height="7"/>
    <path d="M858 44 Q870 28 882 44 Z"/>
    <rect x="867" y="18" width="6" height="12"/>
    <circle cx="870" cy="14" r="5"/>
  </g>`;

// ---------- Boston: the State House dome, Bunker Hill, the Zakim ----------
SKYLINES.boston = `
  <g class="far">
    <path d="${terrace(240, 430, 150, 5)}"/>
    <rect x="700" y="104" width="30" height="81"/>
    <path d="M742 185 L742 88 L772 80 L772 185 Z"/>
    <path d="${terrace(1120, 1200, 152, 8)}"/>
  </g>
  <g class="near">
    <!-- Bunker Hill Monument -->
    <path d="M96 185 L104 58 L128 58 L136 185 Z"/>
    <path d="M104 58 L116 32 L128 58 Z"/>
    <!-- Beacon Hill brownstones, bow fronts -->
    <path d="M160 185 L160 128 Q184 118 208 128 L208 185 Z"/>
    <path d="M208 185 L208 132 Q232 122 256 132 L256 185 Z"/>
    <!-- Massachusetts State House -->
    <rect x="440" y="140" width="220" height="45"/>
    <rect x="476" y="120" width="148" height="22"/>
    <g class="cut">
      <rect x="492" y="126" width="8" height="16"/><rect x="516" y="126" width="8" height="16"/>
      <rect x="540" y="126" width="8" height="16"/><rect x="564" y="126" width="8" height="16"/>
      <rect x="588" y="126" width="8" height="16"/>
    </g>
    <rect x="512" y="104" width="76" height="18"/>
    <g class="gold">
      <path d="M514 104 Q550 52 586 104 Z"/>
      <rect x="518" y="100" width="64" height="6"/>
      <path d="M540 62 Q550 48 560 62 Z"/>
      <rect x="547" y="34" width="6" height="16"/>
      <path d="M550 22 L554 32 L546 32 Z"/>
    </g>
    <!-- Leonard P. Zakim Bunker Hill Bridge -->
    <path d="M812 185 L812 74 L822 74 L822 185 Z"/>
    <path d="M800 78 L834 78 L826 46 L817 46 L817 22 L812 22 L812 46 L808 46 Z"/>
    <path d="M986 185 L986 74 L996 74 L996 185 Z"/>
    <path d="M974 78 L1008 78 L1000 46 L991 46 L991 22 L986 22 L986 46 L982 46 Z"/>
    <g class="cable">
      <path d="M817 34 L760 138 M817 40 L784 138 M817 46 L806 138"/>
      <path d="M817 34 L880 138 M817 40 L856 138 M817 46 L830 138"/>
      <path d="M991 34 L934 138 M991 40 L958 138 M991 46 L982 138"/>
      <path d="M991 34 L1054 138 M991 40 L1030 138 M991 46 L1004 138"/>
    </g>
    <rect x="742" y="138" width="330" height="8"/>
  </g>`;
