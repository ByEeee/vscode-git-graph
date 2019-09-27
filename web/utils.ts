/* Constants */
const VSCODE_API = acquireVsCodeApi();

/* 
The SVG icons below (alert, arrowLeft, arrowRight, branch, check, close, copy, download, eye, gear, info, openFile, pencil, search, stash, tag, loading & refresh) were generated by the MIT licensed Software described in the file ./licenses/LICENSE_OCTICONS. The Software itself is not used in this project, only several icons generated by it are used (in the lines directly below this comment).
The SVG icons below (openFolder, closedFolder & file) are from https://icons8.com/icon/pack/free-icons/ios11, and are used under the licence on https://icons8.com/license, which is under https://creativecommons.org/licenses/by-nd/3.0/
*/
const SVG_ICONS = {
	alert: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>',
	arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M7.67,4.33V1L1,6 7.67,11V7.67H11V4.33Z"/></svg>',
	arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M4.33,4.33V1L11,6 4.33,11V7.67H1V4.33Z"/></svg>',
	branch: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>',
	check: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>',
	close: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>',
	copy: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>',
	download: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -0.5 16 16.5"><path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/></svg>',
	eye: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>',
	gear: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-1 -1 18 18"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>',
	info: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"/></svg>',
	openFile: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z"/></svg>',
	pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>',
	review: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m4,4.7 -4,7.3 4,7.3 2.5,0 -4,-7.3 4,-7.3zM11.5,6C9,5.5 6.6,7.1 6.1,9.6c-0.5,2.6 1.1,5 3.6,5.5 1,0.2 1.8,0.1 2.7,-0.3l2.5,3.3c0.1,0.1 0.3,0.2 0.5,0.3 0.2,0 0.4,0 0.6,-0.1 0.3,-0.2 0.4,-0.4 0.4,-0.6 0,-0.2 0,-0.4 -0.1,-0.6 0,-0.2 -2.4,-3.3 -2.4,-3.3 0.7,-0.6 1,-1.5 1.3,-2.4C15.7,8.9 14,6.5 11.5,6zm8.5,-1.3 -2.5,0 4,7.3 -4.2,7.3 2.5,0L24,12zm-8.8,3c1.6,0.3 2.6,1.8 2.3,3.4 -0.3,1.6 -1.8,2.6 -3.4,2.3C8.5,13 7.4,11.6 7.8,10 8,8.4 9.6,7.3 11.2,7.7z"/></svg>',
	search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-0.5 -2 18 18"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>',
	stash: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z"/></svg>',
	tag: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>',
	loading: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z"/></svg>',
	refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M 8.244,15.672 C 11.441,15.558 14.868,13.024 14.828,8.55 14.773,6.644 13.911,4.852 12.456,3.619 l -1.648,1.198 c 1.265,0.861 2.037,2.279 2.074,3.809 0.016,2.25 -1.808,5.025 -4.707,5.077 -2.898,0.052 -4.933,-2.08 -5.047,-4.671 C 3.07,6.705 4.635,4.651 6.893,4.088 l 0.041,1.866 3.853,-3.126 -3.978,-2.772 0.032,2.077 c -3.294,0.616 -5.755,3.541 -5.667,6.982 -3.88e-4,4.233 3.873,6.670 7.07,6.557 z"/></svg>',
	openFolder: '<svg xmlns="http://www.w3.org/2000/svg" class="openFolderIcon" viewBox="0 0 30 30"><path d="M 5 4 C 3.895 4 3 4.895 3 6 L 3 9 L 3 11 L 22 11 L 27 11 L 27 8 C 27 6.895 26.105 6 25 6 L 12.199219 6 L 11.582031 4.9707031 C 11.221031 4.3687031 10.570187 4 9.8671875 4 L 5 4 z M 2.5019531 13 C 1.4929531 13 0.77040625 13.977406 1.0664062 14.941406 L 4.0351562 24.587891 C 4.2941563 25.426891 5.0692656 26 5.9472656 26 L 15 26 L 24.052734 26 C 24.930734 26 25.705844 25.426891 25.964844 24.587891 L 28.933594 14.941406 C 29.229594 13.977406 28.507047 13 27.498047 13 L 15 13 L 2.5019531 13 z"/></svg>',
	closedFolder: '<svg xmlns="http://www.w3.org/2000/svg" class="closedFolderIcon" viewBox="0 0 30 30"><path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 13 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 C 28 10.448 27.552 10 27 10 L 3 10 z"/></svg>',
	file: '<svg xmlns="http://www.w3.org/2000/svg" class="fileIcon" viewBox="0 0 30 30"><path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"/></svg>'
};

const EMOJI_MAPPINGS: { [shortcode: string]: string } = { 'alembic': '⚗', 'alien': '👽', 'ambulance': '🚑', 'apple': '🍎', 'arrow_down': '⬇️', 'arrow_up': '⬆️', 'art': '🎨', 'beers': '🍻', 'bento': '🍱', 'bookmark': '🔖', 'books': '📚', 'boom': '💥', 'bug': '🐛', 'building_construction': '🏗', 'bulb': '💡', 'busts_in_silhouette': '👥', 'camera_flash': '📸', 'card_file_box': '🗃', 'card_index': '📇', 'chart_with_upwards_trend': '📈', 'checkered_flag': '🏁', 'children_crossing': '🚸', 'clown_face': '🤡', 'construction': '🚧', 'construction_worker': '👷', 'egg': '🥚', 'exclamation': '❗', 'fire': '🔥', 'globe_with_meridians': '🌐', 'green_apple': '🍏', 'green_heart': '💚', 'hammer': '🔨', 'heavy_check_mark': '✔️', 'heavy_minus_sign': '➖', 'heavy_plus_sign': '➕', 'iphone': '📱', 'label': '🏷️', 'lipstick': '💄', 'lock': '🔒', 'loud_sound': '🔊', 'mag': '🔍', 'mute': '🔇', 'new': '🆕', 'ok_hand': '👌', 'package': '📦', 'page_facing_up': '📄', 'pencil': '📝', 'pencil2': '✏️', 'penguin': '🐧', 'poop': '💩', 'pushpin': '📌', 'racehorse': '🐎', 'recycle': '♻️', 'rewind': '⏪', 'robot': '🤖', 'rocket': '🚀', 'rotating_light': '🚨', 'see_no_evil': '🙈', 'shirt': '👕', 'sparkles': '✨', 'speech_balloon': '💬', 'tada': '🎉', 'triangular_ruler': '📐', 'truck': '🚚', 'twisted_rightwards_arrows': '🔀', 'video_game': '🎮', 'whale': '🐳', 'wheel_of_dharma': '☸️', 'wheelchair': '♿️', 'white_check_mark': '✅', 'wrench': '🔧', 'zap': '⚡️' };
const EMOJI_SHORTCODE_REGEX = /:([A-Za-z0-9-_]+):/g;

const ENCLOSING_GROUPS: { [close: string]: string } = { ')': '(', ']': '[', '}': '{', '>': '<' };
const GIT_FILE_CHANGE_TYPES = { 'A': 'Added', 'M': 'Modified', 'D': 'Deleted', 'R': 'Renamed', 'U': 'Untracked' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const REF_INVALID_REGEX = /^[-\/].*|[\\" ><~^:?*[]|\.\.|\/\/|\/\.|@{|[.\/]$|\.lock$|^@$/g;

const HTML_ESCAPES: { [key: string]: string } = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '/': '&#x2F;' };
const HTML_UNESCAPES: { [key: string]: string } = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#x27;': '\'', '&#x2F;': '/' };
const HTML_ESCAPER_REGEX = /[&<>"'\/]/g;
const HTML_UNESCAPER_REGEX = /&lt;|&gt;|&amp;|&quot;|&#x27;|&#x2F;/g;

const ELLIPSIS = '&#8230;';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const UNCOMMITTED = '*';
const SHOW_ALL_BRANCHES = '';

const COLUMN_HIDDEN = -100;
const COLUMN_AUTO = -101;

const COLUMN_MIN_WIDTH = 40;
const COLUMN_LEFT_RIGHT_PADDING = 24;

const CLASS_ACTIVE = 'active';
const CLASS_BRANCH_LABELS_ALIGNED_TO_GRAPH = 'branchLabelsAlignedToGraph';
const CLASS_COMMIT_DETAILS_OPEN = 'commitDetailsOpen';
const CLASS_DISABLED = 'disabled';
const CLASS_FETCH_SUPPORTED = 'fetchSupported';
const CLASS_LOADING = 'loading';
const CLASS_PENDING_REVIEW = 'pendingReview';
const CLASS_REFRESHING = 'refreshing';
const CLASS_REF_HEAD = 'head';
const CLASS_REF_REMOTE = 'remote';
const CLASS_REF_STASH = 'stash';
const CLASS_REF_TAG = 'tag';
const CLASS_TAG_LABELS_RIGHT_ALIGNED = 'tagLabelsRightAligned';
const CLASS_TRANSITION = 'transition';

const ID_EVENT_CAPTURE_ELEM = 'eventCaptureElem';

const CSS_PROP_FONT_FAMILY = '--vscode-font-family';
const CSS_PROP_EDITOR_FONT_FAMILY = '--vscode-editor-font-family';
const CSS_PROP_FIND_MATCH_HIGHLIGHT_BACKGROUND = '--vscode-editor-findMatchHighlightBackground';

const ATTR_ERROR = 'data-error';

const ACTION_RUNNING_DIALOG = 'action-running';
const FORM_DIALOG = 'form';
const MESSAGE_DIALOG = 'message';


/* General Helpers */

function arraysEqual<T>(a: T[], b: T[], equalElements: (a: T, b: T) => boolean) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (!equalElements(a[i], b[i])) return false;
	}
	return true;
}

function arraysStrictlyEqual<T>(a: T[], b: T[]) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}
function pad2(i: number) {
	return i > 9 ? i : '0' + i;
}

// Modify opacity of rgb/rgba/hex colour by multiplying it by opacity (0 <= opacity <= 1)
function modifyColourOpacity(colour: string, opacity: number) {
	let fadedCol = 'rgba(0,0,0,0)', match;
	if ((match = colour.match(/rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/)) !== null) {
		fadedCol = 'rgba(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + (parseFloat(match[4]) * opacity).toFixed(2) + ')';
	} else if ((match = colour.match(/#\s*([0-9a-fA-F]+)/)) !== null) {
		let hex = match[1];
		let length = hex.length;
		if (length === 3 || length === 4 || length === 6 || length === 8) {
			let col = length < 5
				? { r: hex[0] + hex[0], g: hex[1] + hex[1], b: hex[2] + hex[2], a: length === 4 ? hex[3] + hex[3] : 'ff' }
				: { r: hex[0] + hex[1], g: hex[2] + hex[3], b: hex[4] + hex[5], a: length === 8 ? hex[6] + hex[7] : 'ff' };
			fadedCol = 'rgba(' + parseInt(col.r, 16) + ',' + parseInt(col.g, 16) + ',' + parseInt(col.b, 16) + ',' + (parseInt(col.a, 16) * opacity / 255).toFixed(2) + ')';
		}
	} else if ((match = colour.match(/rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/)) !== null) {
		fadedCol = 'rgba(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + opacity + ')';
	}
	return fadedCol;
}


/* HTML Escape / Unescape */

function escapeHtml(str: string) {
	return str.replace(HTML_ESCAPER_REGEX, (match) => HTML_ESCAPES[match]);
}

function unescapeHtml(str: string) {
	return str.replace(HTML_UNESCAPER_REGEX, (match) => HTML_UNESCAPES[match]);
}


/* Formatters */

function formatText(str: string) {
	let urlRegexp = /https?:\/\/\S+[^,.?!'":;\s]/gu, match: RegExpExecArray | null, matchEnd = 0, outStr = '';
	while (match = urlRegexp.exec(str)) {
		if (matchEnd !== match.index) {
			// Output the text before the url match
			outStr += escapeHtml(substituteEmojis(str.substring(matchEnd, match.index)));
		}
		matchEnd = urlRegexp.lastIndex;

		// Correct urls which are enclosed with: (), [], {} or <>
		let url = match[0];
		let suffix = url.substring(url.length - 1);
		if (match.index > 0 && typeof ENCLOSING_GROUPS[suffix] === 'string' && str.substring(match.index - 1, match.index) === ENCLOSING_GROUPS[suffix]) {
			url = url.substring(0, url.length - 1);
		} else {
			suffix = '';
		}

		let escapedUrl = escapeHtml(url);
		// Output the detected url
		outStr += '<a href="' + escapedUrl + '" target="_blank">' + escapedUrl + '</a>' + escapeHtml(suffix);
	}

	// Return the output string, followed by any text after the last match
	return outStr + escapeHtml(substituteEmojis(str.substring(matchEnd)));
}

function substituteEmojis(str: string) {
	return str.replace(EMOJI_SHORTCODE_REGEX, (match, shortcode) => typeof EMOJI_MAPPINGS[shortcode] === 'string' ? EMOJI_MAPPINGS[shortcode] : match);
}

function registerCustomEmojiMappings(mappings: GG.CustomEmojiShortcodeMapping[]) {
	let validShortcodeRegex = /^:[A-Za-z0-9-_]+:$/;
	for (let i = 0; i < mappings.length; i++) {
		if (validShortcodeRegex.test(mappings[i].shortcode)) {
			EMOJI_MAPPINGS[mappings[i].shortcode.substring(1, mappings[i].shortcode.length - 1)] = mappings[i].emoji;
		}
	}
}

function formatCommaSeparatedList(items: string[]) {
	let str = '';
	for (let i = 0; i < items.length; i++) {
		str += (i > 0 ? (i < items.length - 1 ? ', ' : ' & ') : '') + items[i];
	}
	return str;
}

function formatShortDate(unixTimestamp: number) {
	const date = new Date(unixTimestamp * 1000), format = initialState.config.dateFormat;
	let dateStr = format.iso
		? date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate())
		: date.getDate() + ' ' + MONTHS[date.getMonth()] + ' ' + date.getFullYear();
	let hourMinsStr = pad2(date.getHours()) + ':' + pad2(date.getMinutes());
	let formatted;

	if (format.type === 'date-time') {
		formatted = dateStr + ' ' + hourMinsStr;
	} else if (format.type === 'date') {
		formatted = dateStr;
	} else {
		let diff = Math.round((new Date()).getTime() / 1000) - unixTimestamp, unit;
		if (diff < 60) {
			unit = 'second';
		} else if (diff < 3600) {
			unit = 'minute';
			diff /= 60;
		} else if (diff < 86400) {
			unit = 'hour';
			diff /= 3600;
		} else if (diff < 604800) {
			unit = 'day';
			diff /= 86400;
		} else if (diff < 2629800) {
			unit = 'week';
			diff /= 604800;
		} else if (diff < 31557600) {
			unit = 'month';
			diff /= 2629800;
		} else {
			unit = 'year';
			diff /= 31557600;
		}
		diff = Math.round(diff);
		formatted = diff + ' ' + unit + (diff !== 1 ? 's' : '') + ' ago';
	}
	return {
		title: dateStr + ' ' + hourMinsStr + ':' + pad2(date.getSeconds()),
		formatted: formatted
	};
}

function formatLongDate(unixTimestamp: number) {
	const date = new Date(unixTimestamp * 1000);
	if (initialState.config.dateFormat.iso) {
		let timezoneOffset = date.getTimezoneOffset();
		let absoluteTimezoneOffset = Math.abs(timezoneOffset);
		let timezone = timezoneOffset === 0 ? 'Z' : ' ' + (timezoneOffset < 0 ? '+' : '-') + pad2(Math.floor(absoluteTimezoneOffset / 60)) + pad2(absoluteTimezoneOffset % 60);
		return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate()) + ' ' + pad2(date.getHours()) + ':' + pad2(date.getMinutes()) + ':' + pad2(date.getSeconds()) + timezone;
	} else {
		return date.toString();
	}
}


/* DOM Helpers */

function addListenerToClass(className: string, event: string, eventListener: EventListener) {
	let elems = document.getElementsByClassName(className), i;
	for (i = 0; i < elems.length; i++) {
		elems[i].addEventListener(event, eventListener);
	}
}

function insertAfter(newNode: HTMLElement, referenceNode: HTMLElement) {
	referenceNode.parentNode!.insertBefore(newNode, referenceNode.nextSibling);
}

function insertBeforeFirstChildWithClass(newChild: HTMLElement, parent: HTMLElement, className: string) {
	let referenceNode: Node | null = null;
	for (let i = 0; i < parent.children.length; i++) {
		if (parent.children[i].classList.contains(className)) {
			referenceNode = parent.children[i];
			break;
		}
	}
	parent.insertBefore(newChild, referenceNode);
}

function alterClass(elem: HTMLElement, className: string, state: boolean) {
	if (elem.classList.contains(className) !== state) {
		if (state) {
			elem.classList.add(className);
		} else {
			elem.classList.remove(className);
		}
		return true;
	}
	return false;
}

function getChildNodesWithTextContent(elem: Node) {
	let textChildren: Node[] = [];
	for (let i = 0; i < elem.childNodes.length; i++) {
		if (elem.childNodes[i].childNodes.length > 0) {
			textChildren.push(...getChildNodesWithTextContent(elem.childNodes[i]));
		} else if (elem.childNodes[i].textContent !== null && elem.childNodes[i].textContent !== '') {
			textChildren.push(elem.childNodes[i]);
		}
	}
	return textChildren;
}

function getChildrenWithClassName(elem: Element, className: string) {
	let children: Element[] = [];
	for (let i = 0; i < elem.children.length; i++) {
		if (elem.children[i].children.length > 0) {
			children.push(...getChildrenWithClassName(elem.children[i], className));
		} else if (elem.children[i].className === className) {
			children.push(elem.children[i]);
		}
	}
	return children;
}

function getChildUl(elem: HTMLElement) {
	for (let i = 0; i < elem.children.length; i++) {
		if (elem.children[i].tagName === 'UL') {
			return <HTMLUListElement>elem.children[i];
		}
	}
	return null;
}


/* VSCode Helpers */

function sendMessage(msg: GG.RequestMessage) {
	VSCODE_API.postMessage(msg);
}

function getVSCodeStyle(name: string) {
	return document.documentElement.style.getPropertyValue(name);
}


/* Image Resizing for Avatars */

class ImageResizer {
	private canvas: HTMLCanvasElement | null = null;
	private context: CanvasRenderingContext2D | null = null;

	public resize(dataUri: string, callback: (dataUri: string) => void) {
		if (this.canvas === null) this.canvas = document.createElement('canvas');
		if (this.context === null) this.context = this.canvas.getContext('2d');
		if (this.context === null) {
			callback(dataUri);
			return;
		}

		let image = new Image();
		image.onload = () => {
			let outputDataUri = '';
			if (this.canvas === null || this.context === null) {
				outputDataUri = dataUri;
			} else {
				let size = Math.ceil(18 * window.devicePixelRatio);
				if (this.canvas.width !== size) this.canvas.width = size;
				if (this.canvas.height !== size) this.canvas.height = size;
				this.context.clearRect(0, 0, size, size);
				this.context.drawImage(image, 0, 0, size, size);
				outputDataUri = this.canvas.toDataURL();
			}
			callback(outputDataUri);
		};
		image.src = dataUri;
	}
}


/* Event Overlay (for blocking and/or capturing mouse events on the Git Graph View) */

class EventOverlay {
	private move: EventListener | null = null;
	private stop: EventListener | null = null;

	public create(className: string, move: EventListener | null, stop: EventListener | null) {
		if (document.getElementById(ID_EVENT_CAPTURE_ELEM) !== null) this.remove();

		let eventOverlayElem = document.createElement('div');
		eventOverlayElem.id = ID_EVENT_CAPTURE_ELEM;
		eventOverlayElem.className = className;

		this.move = move;
		this.stop = stop;
		if (this.move !== null) {
			eventOverlayElem.addEventListener('mousemove', this.move);
		}
		if (this.stop !== null) {
			eventOverlayElem.addEventListener('mouseup', this.stop);
			eventOverlayElem.addEventListener('mouseleave', this.stop);
		}

		document.body.appendChild(eventOverlayElem);
	}

	public remove() {
		let eventOverlayElem = document.getElementById(ID_EVENT_CAPTURE_ELEM);
		if (eventOverlayElem === null) return;

		if (this.move !== null) {
			eventOverlayElem.removeEventListener('mousemove', this.move);
			this.move = null;
		}
		if (this.stop !== null) {
			eventOverlayElem.removeEventListener('mouseup', this.stop);
			eventOverlayElem.removeEventListener('mouseleave', this.stop);
			this.stop = null;
		}

		document.body.removeChild(eventOverlayElem);
	}
}
