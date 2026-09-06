const BOOKS = ['馭風書院', '矽晶書院', '曦華書院', '靛織書院'];
const BOOK_COLOR = {
  '馭風書院': 'var(--book-wind)',
  '矽晶書院': 'var(--book-si)',
  '曦華書院': 'var(--book-dawn)',
  '靛織書院': 'var(--book-indigo)'
};

const DEFAULT_TASKS = {
  '1F': [
    { label: '警衛室附近地板', book: '曦華書院' },
    { label: '花圃維護', book: '曦華書院' },
    { label: '走廊地板（靠共伴樞）', book: '曦華書院' },
    { label: '花園', book: '曦華書院' },
    { label: '火塘－地板', book: '靛織書院' },
    { label: '火塘－桌子', book: '靛織書院' },
    { label: '創客空間－地板', book: '靛織書院' },
    { label: '創客空間－窗戶及桌椅', book: '靛織書院' },
    { label: '性別友善廁所－洗手台', book: '曦華書院' },
    { label: '性別友善廁所－馬桶', book: '曦華書院' },
    { label: '性別友善廁所－地板', book: '曦華書院' },
    { label: '無障礙廁所＋廁所走廊－地板', book: '曦華書院' },
    { label: '無障礙廁所＋廁所走廊－刷馬桶、小便斗', book: '曦華書院' },
    { label: '垃圾儲藏室（分類垃圾）', book: '靛織書院' },
    { label: '一樓大廳－花圃維護', book: '曦華書院' },
    { label: '一樓大廳－地板簡單清潔', book: '曦華書院' },
    { label: '泮林－窗戶', book: '靛織書院' },
    { label: '泮林－櫃子', book: '靛織書院' },
    { label: '泮林－地板', book: '靛織書院' },
    { label: '體育器材室（整理器材）', book: '靛織書院' },
    { label: '一樓走廊－第一部分（掃拖）', book: '曦華書院' },
    { label: '一樓走廊－第二部分（掃拖）', book: '曦華書院' },
    { label: '一樓走廊－第三部分（掃拖）', book: '曦華書院' },
    { label: '樓梯－共伴樞旁', book: '曦華書院' },
    { label: '樓梯－廁所旁', book: '曦華書院' },
    { label: '樓梯－通學樓梯（到 2F 空地）', book: '曦華書院' }
  ],
  '2F': [
    { label: '教研樞旁花圃', book: '馭風書院' },
    { label: '教研樞旁空地地板維護', book: '馭風書院' },
    { label: '一般教室（一）', book: '馭風書院' },
    { label: '一般教室（二）', book: '馭風書院' },
    { label: '廁所－地板', book: '馭風書院' },
    { label: '廁所－男廁刷馬桶等', book: '馭風書院' },
    { label: '廁所－女廁刷馬桶等', book: '馭風書院' },
    { label: '教研樞旁廁所－男廁', book: '馭風書院' },
    { label: '教研樞旁廁所－女廁', book: '馭風書院' },
    { label: '走廊＋無障礙廁所', book: '馭風書院' },
    { label: '議策樞維護', book: '馭風書院' },
    { label: '教研樞前空地', book: '馭風書院' },
    { label: '通往一樓校園鏤空處（欄杆＋地板）', book: '馭風書院' },
    { label: '向陽階梯附近地板一', book: '馭風書院' },
    { label: '向陽階梯附近地板二', book: '馭風書院' },
    { label: '樓梯－向陽階梯＋後方花圃維護（到 2F）', book: '馭風書院' },
    { label: '樓梯－廁所樓梯（靠近一般教室）', book: '馭風書院' },
    { label: '樓梯－廁所樓梯（靠近教研樞）', book: '馭風書院' }
  ],
  '3F': [
    { label: '淬維護', book: '矽晶書院' },
    { label: '一般教室（一）', book: '矽晶書院' },
    { label: '一般教室（二）', book: '矽晶書院' },
    { label: '廁所－地板', book: '矽晶書院' },
    { label: '廁所－男廁刷馬桶等', book: '矽晶書院' },
    { label: '廁所－女廁刷馬桶等', book: '矽晶書院' },
    { label: '花圃旁廁所－男廁', book: '矽晶書院' },
    { label: '花圃旁廁所－女廁', book: '矽晶書院' },
    { label: '走廊＋無障礙廁所', book: '矽晶書院' },
    { label: '地科／生物教室維護', book: '矽晶書院' },
    { label: 'PBL 研創維護', book: '矽晶書院' },
    { label: '迴響維護', book: '矽晶書院' },
    { label: '走廊－第一部分（掃加拖）', book: '矽晶書院' },
    { label: '走廊－第二部分（掃加拖）', book: '矽晶書院' },
    { label: '走廊－第三部分（掃加拖）', book: '矽晶書院' },
    { label: '走廊－第四部分（掃加拖）', book: '矽晶書院' },
    { label: '走廊－第五部分（掃加拖）', book: '矽晶書院' },
    { label: '花圃空間', book: '矽晶書院' }
  ]
};
const FLOOR_ORDER = ['1F', '2F', '3F'];

const RATINGS = [
  { value: '1', label: '1・非常乾淨' },
  { value: '2', label: '2・有一點灰塵，但大致清掃' },
  { value: '3', label: '3・不合格' }
];
const RATING_LABEL = {};
RATINGS.forEach(r => RATING_LABEL[r.value] = r.label);

function buildRoster() {
  const counts = { '矽晶書院': 21, '曦華書院': 20, '靛織書院': 20 };
  const roster = {
    '馭風書院': ['固定員']
  };

  ['矽晶書院', '曦華書院', '靛織書院'].forEach(book => {
    const n = counts[book];
    roster[book] = Array.from({ length: n }, (_, i) => book.slice(0, 2) + String(i + 1).padStart(2, '0'));
  });
  return roster;
}
const ROSTER = buildRoster();

function pad(n) { return String(n).padStart(2, '0'); }
function monthKey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1); }
function dateKey(d) { return monthKey(d) + '-' + pad(d.getDate()); }

function weekKey(d) {
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  const weekNum = 1 + Math.round((firstThursday - target.valueOf()) / 604800000);
  return target.getFullYear() + '-W' + pad(weekNum);
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const now = new Date();
const MKEY = monthKey(now);
const DKEY = dateKey(now);
const WKEY = weekKey(now);

let tasksData = null;
let inspectorData = null;
let checklistData = null;
let submissions = null;
let selectedBook = null;

// 🔗 請務必確認 Apps Script 部署 URL 與 API Key 一致
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzl7m7Ocj31KjUiwSWkj73oOc9dZvySHg0N4El63GBOa0ZKjPbBaNMiq-xrAiNy0zl0/exec';
const API_KEY = 'u11501066';

async function loadAll() {
  tasksData = DEFAULT_TASKS;
  const kv = await fetchDump();

  inspectorData = kv['inspectors:' + WKEY] ? JSON.parse(kv['inspectors:' + WKEY]) : null;
  if (!inspectorData) {
    inspectorData = {};
    BOOKS.forEach(book => {
      if (book === '馭風書院') {
        inspectorData[book] = ROSTER['馭風書院'][0];
      } else {
        inspectorData[book] = pick(ROSTER[book]);
      }
    });
  }
  checklistData = kv['checklist:' + DKEY] ? JSON.parse(kv['checklist:' + DKEY]) : {};
  submissions = kv['submissions:' + DKEY] ? JSON.parse(kv['submissions:' + DKEY]) : {};
}

async function fetchDump() {
  try {
    const res = await fetch(APPS_SCRIPT_URL + '?action=dump');
    const data = await res.json();
    const map = {};
    (data.rows || []).forEach(r => { map[r.key] = r.value; });
    return map;
  } catch (e) {
    console.error('dump error', e);
    return {};
  }
}

async function saveJSON(key, obj) {
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        apiKey: API_KEY,
        action: 'set',
        key: key,
        value: JSON.stringify(obj)
      })
    });
    const result = await res.json();
    if (result.error) {
      console.error('Save error from server:', result.error);
    }
  } catch (e) {
    console.error('save error', key, e);
  }
}

function taskId(floor, label) { return floor + '||' + label; }
function floorsForBook(book) {
  return FLOOR_ORDER.filter(floor => tasksData[floor].some(item => item.book === book));
}

/* Bottom sheet UI 控制 */
const sheetBackdrop = document.getElementById('sheet-backdrop');
const sheetEl = document.getElementById('sheet');

function openSheet(title, options, current, onPick) {
  document.getElementById('sheet-title').textContent = title;
  const wrap = document.getElementById('sheet-options');
  wrap.innerHTML = '';

  options.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'sheet-option' + (o.value === current ? ' active' : '');
    btn.type = 'button';

    const spanText = document.createElement('span');
    spanText.textContent = o.label;
    btn.appendChild(spanText);

    if (o.value === current) {
      const checkMark = document.createElement('span');
      checkMark.className = 'check-mark';
      checkMark.textContent = '✓';
      btn.appendChild(checkMark);
    }

    btn.addEventListener('click', () => {
      closeSheet();
      onPick(o.value);
    });

    wrap.appendChild(btn);
  });

  sheetBackdrop.classList.add('show');
  sheetEl.classList.add('show');
}

function closeSheet() {
  sheetBackdrop.classList.remove('show');
  sheetEl.classList.remove('show');
}
sheetBackdrop.addEventListener('click', closeSheet);

/* 頁籤切換邏輯 */
function switchTab(tabName) {
  const tabs = ['check', 'pending', 'weekly'];

  tabs.forEach(t => {
    const viewEl = document.getElementById(`view-${t}`);
    const tabEl = document.getElementById(`tab-${t}`);

    const isTarget = (t === tabName);
    if (viewEl) viewEl.style.display = isTarget ? 'block' : 'none';
    if (tabEl) tabEl.classList.toggle('active', isTarget);
  });

  const submitArea = document.getElementById('submit-area');
  if (submitArea) {
    submitArea.style.display = (tabName === 'check') ? 'block' : 'none';
  }

  if (tabName === 'pending') {
    renderPendingPlaces();
  } else if (tabName === 'weekly') {
    renderWeeklyMatrix();
  }
}

function renderWhoBox() {
  const el = document.getElementById('who-box');
  el.innerHTML = '';

  if (!selectedBook) {
    const label = document.createElement('label');
    label.textContent = '請問您的書院為何？';

    const btn = document.createElement('button');
    btn.className = 'select-trigger placeholder';
    btn.id = 'book-trigger';
    btn.type = 'button';

    const txt = document.createElement('span');
    txt.textContent = '請選擇書院';
    const arrow = document.createElement('span');
    arrow.className = 'trigger-arrow';

    btn.appendChild(txt);
    btn.appendChild(arrow);
    btn.addEventListener('click', () => {
      openSheet('請選擇書院', BOOKS.map(b => ({ value: b, label: b })), selectedBook, (val) => {
        selectedBook = val;
        render();
      });
    });

    el.appendChild(label);
    el.appendChild(btn);
  } else {
    const floors = floorsForBook(selectedBook).join('、');

    const container = document.createElement('div');
    container.className = 'who-current';

    const info = document.createElement('div');
    info.className = 'info';
    info.append('您的書院：');
    const b = document.createElement('b');
    b.textContent = selectedBook;
    info.append(b, `（負責 ${floors}）`, document.createElement('br'), '本週清潔工：');

    const inspectorSpan = document.createElement('span');
    inspectorSpan.textContent = inspectorData[selectedBook] || '未定';
    info.append(inspectorSpan);

    const swapBtn = document.createElement('button');
    swapBtn.className = 'swap-btn';
    swapBtn.type = 'button';
    swapBtn.textContent = '更換書院';
    swapBtn.addEventListener('click', () => {
      selectedBook = null;
      render();
    });

    container.appendChild(info);
    container.appendChild(swapBtn);
    el.appendChild(container);
  }
}

function render() {
  document.getElementById('today-label').textContent =
    now.toLocaleDateString('zh-TW', { month: 'long', day: 'numeric', weekday: 'short' });

  renderWhoBox();

  const stripEl = document.getElementById('roster-strip');
  stripEl.innerHTML = '';
  BOOKS.forEach(book => {
    const chip = document.createElement('div');
    chip.className = 'roster-chip';

    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = BOOK_COLOR[book];

    const b = document.createElement('b');
    b.textContent = book;

    const who = document.createElement('span');
    who.className = 'who';
    who.textContent = inspectorData[book] || '';

    chip.appendChild(swatch);
    chip.appendChild(b);
    chip.appendChild(who);
    stripEl.appendChild(chip);
  });

  const floorsEl = document.getElementById('floors');
  const submitEl = document.getElementById('submit-area');
  floorsEl.innerHTML = '';

  if (!selectedBook) {
    floorsEl.innerHTML = '<div class="empty-hint">請先選擇您的書院，才會顯示需要檢查的樓層與項目。</div>';
    submitEl.innerHTML = '';
    renderAdminSubmissions();
    return;
  }

  const alreadySubmitted = !!submissions[selectedBook];
  let totalTasks = 0, passCount = 0;

  floorsForBook(selectedBook).forEach(floor => {
    const items = tasksData[floor].filter(item => item.book === selectedBook);
    const doneCount = items.filter(item => {
      const v = checklistData[taskId(floor, item.label)];
      return v === '1' || v === '2';
    }).length;
    totalTasks += items.length;
    passCount += doneCount;
    const pct = items.length ? Math.round(doneCount / items.length * 100) : 0;

    const card = document.createElement('div');
    card.className = 'floor';

    const head = document.createElement('div');
    head.className = 'floor-head';

    const num = document.createElement('div');
    num.className = 'floor-num';
    num.textContent = floor;

    const meta = document.createElement('div');
    meta.className = 'floor-meta';

    const tags = document.createElement('div');
    tags.className = 'tags';

    const tag = document.createElement('span');
    tag.className = 'book-tag';
    tag.style.background = BOOK_COLOR[selectedBook];

    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    tag.appendChild(swatch);
    tag.append(selectedBook);
    tags.appendChild(tag);

    const progLine = document.createElement('div');
    progLine.className = 'progress-line';

    const strong = document.createElement('strong');
    strong.textContent = doneCount;
    progLine.append(strong, ` / ${items.length} 項達到合格以上`);

    meta.appendChild(tags);
    meta.appendChild(progLine);
    head.appendChild(num);
    head.appendChild(meta);

    const track = document.createElement('div');
    track.className = 'progress-track';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = pct + '%';
    track.appendChild(fill);

    const taskList = document.createElement('div');
    taskList.className = 'task-list';

    items.forEach(item => {
      const v = checklistData[taskId(floor, item.label)] || '';
      const triggerLabel = v ? RATING_LABEL[v] : '尚未檢查';

      const row = document.createElement('div');
      row.className = 'task-row ' + (v ? 'level-' + v : '');
      row.dataset.floor = floor;
      row.dataset.label = item.label;

      const label = document.createElement('div');
      label.className = 'label';
      label.textContent = item.label;

      const btn = document.createElement('button');
      btn.className = 'rate-trigger';
      btn.type = 'button';

      const btnText = document.createElement('span');
      btnText.textContent = triggerLabel;

      const arrow = document.createElement('span');
      arrow.className = 'trigger-arrow';

      btn.appendChild(btnText);
      btn.appendChild(arrow);
      row.appendChild(label);
      row.appendChild(btn);
      taskList.appendChild(row);
    });

    card.appendChild(head);
    card.appendChild(track);
    card.appendChild(taskList);
    floorsEl.appendChild(card);
  });

  floorsEl.querySelectorAll('.task-row').forEach(row => {
    const btn = row.querySelector('.rate-trigger');
    if (btn.disabled) return;
    btn.addEventListener('click', () => {
      const floor = row.dataset.floor, label = row.dataset.label;
      const id = taskId(floor, label);
      const current = checklistData[id] || '';
      const options = [{ value: '', label: '尚未檢查' }, ...RATINGS];
      openSheet(label, options, current, (val) => {
        if (val) { checklistData[id] = val; } else { delete checklistData[id]; }
        render();
      });
    });
  });

  const allDone = totalTasks > 0 && passCount === totalTasks;

  submitEl.innerHTML = '';
  const submitBox = document.createElement('div');
  submitBox.className = 'submit-box';

  if (alreadySubmitted) {
    const subTime = new Date(submissions[selectedBook]);
    const note = document.createElement('div');
    note.className = 'submitted-note';
    note.textContent = `✓ 今日已於 ${pad(subTime.getHours())}:${pad(subTime.getMinutes())} 送出過，仍可再次送出更新結果`;
    submitBox.appendChild(note);
  }

  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.textContent = allDone ? '全部項目都已達到合格以上，可以送出今日結果' : `還有 ${totalTasks - passCount} 項尚未達到「有一點灰塵，但大致清掃」以上`;
  submitBox.appendChild(hint);

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.id = 'submit-btn';
  submitBtn.textContent = alreadySubmitted ? '重新送出今日結果' : '送出今日結果';
  submitBox.appendChild(submitBtn);

  submitEl.appendChild(submitBox);

  const btn = document.getElementById('submit-btn');
  if (btn) {
    btn.addEventListener('click', async () => {
      if (!allDone) {
        const ok = confirm(`還有 ${totalTasks - passCount} 項尚未達到合格以上，確定要送出嗎？`);
        if (!ok) return;
      }

      const box = btn.closest('.submit-box');
      box.innerHTML = `
        <div class="hint">送出中，請稍候…</div>
        <div class="submit-progress-track"><div class="submit-progress-fill" id="submit-progress-fill"></div></div>
        <div class="submit-progress-pct" id="submit-progress-pct">0%</div>
      `;
      const fillEl = document.getElementById('submit-progress-fill');
      const pctEl = document.getElementById('submit-progress-pct');

      let pct = 0;
      const timer = setInterval(() => {
        pct += (90 - pct) * 0.12 + 0.6;
        if (pct > 90) pct = 90;
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.round(pct) + '%';
      }, 120);

      try {
        const latestKV = await fetchDump();
        const serverChecklist = latestKV['checklist:' + DKEY] ? JSON.parse(latestKV['checklist:' + DKEY]) : {};
        floorsForBook(selectedBook).forEach(floor => {
          tasksData[floor].filter(item => item.book === selectedBook).forEach(item => {
            const id = taskId(floor, item.label);
            if (checklistData[id]) serverChecklist[id] = checklistData[id];
            else delete serverChecklist[id];
          });
        });
        checklistData = serverChecklist;
        await saveJSON('checklist:' + DKEY, checklistData);

        const latestSubs = latestKV['submissions:' + DKEY] ? JSON.parse(latestKV['submissions:' + DKEY]) : {};
        latestSubs[selectedBook] = new Date().toISOString();
        submissions = latestSubs;
        await saveJSON('submissions:' + DKEY, submissions);
      } finally {
        clearInterval(timer);
        fillEl.style.width = '100%';
        pctEl.textContent = '100%';
      }

      setTimeout(render, 250);
    });
  }

  renderAdminSubmissions();
}

function renderAdminSubmissions() {
  const el = document.getElementById('admin-submissions');
  if (!el) return;
  el.innerHTML = '';

  BOOKS.forEach(book => {
    const sub = submissions[book];
    const status = sub ? `已於 ${pad(new Date(sub).getHours())}:${pad(new Date(sub).getMinutes())} 送出` : '尚未送出';

    const row = document.createElement('div');
    row.className = 'admin-row';

    const span = document.createElement('span');
    span.textContent = `${book}：${status}`;
    row.appendChild(span);

    if (sub) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = '撤銷送出';
      btn.addEventListener('click', async () => {
        if (!confirm(`確定要撤銷 ${book} 今日的送出紀錄嗎？`)) return;
        delete submissions[book];
        await saveJSON('submissions:' + DKEY, submissions);
        render();
      });
      row.appendChild(btn);
    }

    el.appendChild(row);
  });
}

function renderPendingPlaces() {
  const container = document.getElementById('pending-places-container');
  if (!container) return;
  container.innerHTML = '';

  let hasPending = false;
  const fragment = document.createDocumentFragment();

  FLOOR_ORDER.forEach(floor => {
    const uncleanedItems = tasksData[floor].filter(item => {
      const status = checklistData[taskId(floor, item.label)];
      return !status || status === '3';
    });

    if (uncleanedItems.length > 0) {
      hasPending = true;

      const floorDiv = document.createElement('div');
      floorDiv.className = 'floor';
      floorDiv.style.marginBottom = '14px';

      const floorHead = document.createElement('div');
      floorHead.className = 'floor-head';
      floorHead.style.background = '#fff';

      const floorNum = document.createElement('div');
      floorNum.className = 'floor-num';
      floorNum.textContent = floor;

      const floorMeta = document.createElement('div');
      floorMeta.className = 'floor-meta';

      const pendingText = document.createElement('div');
      pendingText.style.cssText = 'font-weight:600; font-size:14px; color:var(--bad);';
      pendingText.textContent = `剩餘 ${uncleanedItems.length} 個區域待處理`;

      floorMeta.appendChild(pendingText);
      floorHead.appendChild(floorNum);
      floorHead.appendChild(floorMeta);
      floorDiv.appendChild(floorHead);

      const taskList = document.createElement('div');
      taskList.className = 'task-list';

      uncleanedItems.forEach(item => {
        const status = checklistData[taskId(floor, item.label)];
        const isBad = status === '3';
        const statusText = isBad ? '檢查不合格' : '尚未打掃／未檢查';
        const statusColor = isBad ? 'var(--bad)' : 'var(--warn)';
        const bgColor = isBad ? 'rgba(178,59,59,0.08)' : 'rgba(184,134,11,0.08)';

        const taskRow = document.createElement('div');
        taskRow.className = 'task-row';
        taskRow.style.cssText = `background:${bgColor}; border-left:4px solid ${statusColor}; margin-bottom:6px; padding:10px; border-radius:6px;`;

        const flexContainer = document.createElement('div');
        flexContainer.style.cssText = 'display:flex; justify-content:space-between; align-items:center;';

        const infoBox = document.createElement('div');

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.style.fontWeight = '600';
        labelDiv.textContent = item.label;

        const subDiv = document.createElement('div');
        subDiv.style.cssText = 'font-size:12px; color:var(--ink-soft); margin-top:2px;';
        const inspectorName = (inspectorData && inspectorData[item.book]) ? inspectorData[item.book] : '未定';
        subDiv.textContent = `負責書院：${item.book} (${inspectorName})`;

        infoBox.appendChild(labelDiv);
        infoBox.appendChild(subDiv);

        const badge = document.createElement('span');
        badge.style.cssText = `font-size:12px; padding:4px 8px; border-radius:4px; background:#fff; color:${statusColor}; font-weight:600; white-space:nowrap;`;
        badge.textContent = statusText;

        flexContainer.appendChild(infoBox);
        flexContainer.appendChild(badge);
        taskRow.appendChild(flexContainer);
        taskList.appendChild(taskRow);
      });

      floorDiv.appendChild(taskList);
      fragment.appendChild(floorDiv);
    }
  });

  if (!hasPending) {
    const emptyHint = document.createElement('div');
    emptyHint.className = 'empty-hint';
    emptyHint.style.cssText = 'background:#e5f2ea; color:var(--good); border-style:solid; border-color:var(--good);';
    emptyHint.textContent = '🎉 全校所有區域皆已完成打掃且評分合格！';
    container.appendChild(emptyHint);
    return;
  }

  container.appendChild(fragment);
}

async function renderWeeklyMatrix() {
  const container = document.getElementById('weekly-matrix-container');
  if (!container) return;

  container.innerHTML = '<div class="loading">載入當週 (週一至週五) 紀錄中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';

  const latestKV = await fetchDump();

  const today = new Date();
  const dayOfWeek = today.getDay();
  const distanceToMonday = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;

  const monday = new Date(today);
  monday.setDate(today.getDate() + distanceToMonday);

  const pastDays = [];
  const weekDays = ['一', '二', '三', '四', '五'];

  for (let i = 0; i < 5; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);

    pastDays.push({
      key: dateKey(d),
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      dayName: weekDays[i]
    });
  }

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  FLOOR_ORDER.forEach(floor => {
    const floorDiv = document.createElement('div');
    floorDiv.className = 'floor';
    floorDiv.style.marginBottom = '16px';

    const floorHead = document.createElement('div');
    floorHead.className = 'floor-head';
    floorHead.style.background = '#fff';

    const floorNum = document.createElement('div');
    floorNum.className = 'floor-num';
    floorNum.textContent = floor;

    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = 'font-weight:600; font-size:15px;';
    titleDiv.textContent = '本週 (一～五) 打掃狀況';

    floorHead.appendChild(floorNum);
    floorHead.appendChild(titleDiv);
    floorDiv.appendChild(floorHead);

    const tableWrap = document.createElement('div');
    tableWrap.style.cssText = 'padding:12px; overflow-x:auto;';

    const table = document.createElement('table');
    table.style.cssText = 'width:100%; border-collapse:collapse; font-size:13px; text-align:center;';

    const thead = document.createElement('thead');
    const headTr = document.createElement('tr');
    headTr.style.cssText = 'border-bottom:2px solid var(--line); color:var(--ink-soft);';

    const thName = document.createElement('th');
    thName.style.cssText = 'text-align:left; padding:8px 6px;';
    thName.textContent = '位置名稱';
    headTr.appendChild(thName);

    pastDays.forEach(d => {
      const th = document.createElement('th');
      th.style.cssText = 'padding:6px; min-width:48px;';
      th.append(d.label, document.createElement('br'));

      const daySpan = document.createElement('span');
      daySpan.style.cssText = 'font-size:11px; font-weight:normal;';
      daySpan.textContent = `(${d.dayName})`;
      th.appendChild(daySpan);

      headTr.appendChild(th);
    });
    thead.appendChild(headTr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tasksData[floor].forEach(item => {
      const id = taskId(floor, item.label);
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid var(--line)';

      const tdLabel = document.createElement('td');
      tdLabel.style.cssText = 'text-align:left; padding:10px 6px; font-weight:500;';
      tdLabel.textContent = item.label;
      tr.appendChild(tdLabel);

      pastDays.forEach(d => {
        const dayData = latestKV['checklist:' + d.key] ? JSON.parse(latestKV['checklist:' + d.key]) : {};
        const status = dayData[id];

        let mark = '➖';
        let color = 'var(--ink-soft)';

        if (status === '1' || status === '2') {
          mark = '✓';
          color = 'var(--good)';
        } else if (status === '3') {
          mark = '✕';
          color = 'var(--bad)';
        }

        const tdStatus = document.createElement('td');
        tdStatus.style.cssText = `padding:8px 4px; color:${color}; font-weight:bold; font-size:14px;`;
        tdStatus.textContent = mark;
        tr.appendChild(tdStatus);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableWrap.appendChild(table);
    floorDiv.appendChild(tableWrap);
    fragment.appendChild(floorDiv);
  });

  container.appendChild(fragment);
}

const rerollBtn = document.getElementById('reroll-btn');
if (rerollBtn) {
  rerollBtn.addEventListener('click', async (e) => {
    if (!confirm('確定要重新抽選本週清潔工並儲存至雲端嗎？')) return;

    // 1. 本地重新抽籤
    BOOKS.forEach(book => {
      if (book === '馭風書院') {
        inspectorData[book] = ROSTER['馭風書院'][0];
      } else {
        inspectorData[book] = pick(ROSTER[book]);
      }
    });

    // 2. 立即更新畫面給使用者看
    render();

    // 3. 【關鍵修復】將新抽出的值寫回 Google 試算表（綁定本週的 Key）
    await saveJSON('inspectors:' + WKEY, inspectorData);
    
    alert('本週清潔工已成功重新抽選並儲存！');
  });
}

(async function init() {
  const floorsEl = document.getElementById('floors');
  if (APPS_SCRIPT_URL.indexOf('PASTE_YOUR') === 0) {
    if (floorsEl) {
      floorsEl.innerHTML =
        '<div class="empty-hint">尚未設定資料庫網址：請把程式碼最上面的 APPS_SCRIPT_URL 換成你部署 Apps Script 後拿到的 /exec 網址。</div>';
    }
    return;
  }
  if (floorsEl) {
    floorsEl.innerHTML =
      '<div class="loading">載入中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';
  }
  await loadAll();
  render();
})();
