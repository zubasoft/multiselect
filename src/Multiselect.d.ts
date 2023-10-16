import { VNode, defineComponent } from 'vue';

interface ClassList {
  assist: string;
  caret: Array<string>;
  clear: string;
  clearIcon: string;
  container: Array<string>;
  dropdown: Array<string>;
  fakeInput: string;
  group: string;
  groupLabel: (g: any) => any;
  groupOptions: string;
  inifinite: string;
  inifiniteSpinner: string;
  multipleLabel: string;
  noOptions: string;
  noResults: string;
  option: (o:any, g:any) => any;
  options: Array<string>;
  placeholder: string;
  search: string;
  singleLabel: string;
  singleLabelText: string;
  spacer: string;
  spinner: string;
  tag: Array<string>
  tagDisabled: string;
  tagRemove: string;
  tagRemoveIcon: string;
  tags: string;
  tagsSearch: string;
  tagsSearchCopy: string;
  tagsSearchWrapper: string;
  wrapper: string;
}

interface MultiselectProps {
  modelValue?: any;
  value?: any;
  mode?: 'single' | 'multiple' | 'tags';
  options?: any[] | object | Function;
  searchable?: boolean;
  valueProp?: string;
  trackBy?: string | string[];
  label?: string;
  placeholder?: string | null;
  multipleLabel?: any; // Function
  disabled?: boolean;
  max?: number;
  limit?: number;
  loading?: boolean;
  id?: string;
  caret?: boolean;
  maxHeight?: string | number;
  noOptionsText?: string | object;
  noResultsText?: string | object;
  canDeselect?: boolean;
  canClear?: boolean;
  clearOnSearch?: boolean;
  clearOnSelect?: boolean;
  delay?: number;
  filterResults?: boolean;
  minChars?: number;
  resolveOnLoad?: boolean;
  appendNewTag?: boolean;
  appendNewOption?: boolean;
  createTag?: boolean;
  createOption?: boolean;
  addTagOn?: string[];
  addOptionOn?: string[];
  hideSelected?: boolean;
  showOptions?: boolean;
  object?: boolean;
  required?: boolean;
  openDirection?: 'top' | 'bottom';
  nativeSupport?: boolean;
  classes?: object;
  strict?: boolean;
  closeOnSelect?: boolean;
  closeOnDeselect?: boolean;
  autocomplete?: string;
  groups?: boolean;
  groupLabel?: string;
  groupOptions?: string;
  groupHideEmpty?: boolean;
  groupSelect?: boolean;
  inputType?: string;
  attrs?: object;
  onCreate?: Function;
  searchStart?: boolean;
  reverse?: boolean;
  regex?: string | object;
  rtl?: boolean;
  infinite?: boolean;
  aria?: object;
  clearOnBlur?: boolean;
  locale?: string;
  fallbackLocale?: string;
  searchFilter?: Function;
  allowAbsent?: boolean;
  appendToBody?: boolean;
  closeOnScroll?: boolean;
  breakTags?: boolean;
}

declare class Multiselect implements ReturnType<typeof defineComponent> {
  modelValue: MultiselectProps['modelValue'];
  value: MultiselectProps['value'];
  mode: MultiselectProps['mode'];
  options: MultiselectProps['options'];
  searchable: MultiselectProps['searchable'];
  valueProp: MultiselectProps['valueProp'];
  trackBy: MultiselectProps['trackBy'];
  label: MultiselectProps['label'];
  placeholder: MultiselectProps['placeholder'];
  multipleLabel: MultiselectProps['multipleLabel'];
  disabled: MultiselectProps['disabled'];
  max: MultiselectProps['max'];
  limit: MultiselectProps['limit'];
  loading: MultiselectProps['loading'];
  id: MultiselectProps['id'];
  caret: MultiselectProps['caret'];
  maxHeight: MultiselectProps['maxHeight'];
  noOptionsText: MultiselectProps['noOptionsText'];
  noResultsText: MultiselectProps['noResultsText'];
  canDeselect: MultiselectProps['canDeselect'];
  canClear: MultiselectProps['canClear'];
  clearOnSearch: MultiselectProps['clearOnSearch'];
  clearOnSelect: MultiselectProps['clearOnSelect'];
  delay: MultiselectProps['delay'];
  filterResults: MultiselectProps['filterResults'];
  minChars: MultiselectProps['minChars'];
  resolveOnLoad: MultiselectProps['resolveOnLoad'];
  appendNewTag: MultiselectProps['appendNewTag'];
  appendNewOption: MultiselectProps['appendNewOption'];
  createTag: MultiselectProps['createTag'];
  createOption: MultiselectProps['createOption'];
  addTagOn: MultiselectProps['addTagOn'];
  addOptionOn: MultiselectProps['addOptionOn'];
  hideSelected: MultiselectProps['hideSelected'];
  showOptions: MultiselectProps['showOptions'];
  object: MultiselectProps['object'];
  required: MultiselectProps['required'];
  openDirection: MultiselectProps['openDirection'];
  nativeSupport: MultiselectProps['nativeSupport'];
  classes: MultiselectProps['classes'];
  strict: MultiselectProps['strict'];
  closeOnSelect: MultiselectProps['closeOnSelect'];
  closeOnDeselect: MultiselectProps['closeOnDeselect'];
  autocomplete: MultiselectProps['autocomplete'];
  groups: MultiselectProps['groups'];
  groupLabel: MultiselectProps['groupLabel'];
  groupOptions: MultiselectProps['groupOptions'];
  groupHideEmpty: MultiselectProps['groupHideEmpty'];
  groupSelect: MultiselectProps['groupSelect'];
  inputType: MultiselectProps['inputType'];
  attrs: MultiselectProps['attrs'];
  onCreate: MultiselectProps['onCreate'];
  searchStart: MultiselectProps['searchStart'];
  reverse: MultiselectProps['reverse'];
  regex: MultiselectProps['regex'];
  rtl: MultiselectProps['rtl'];
  infinite: MultiselectProps['infinite'];
  aria: MultiselectProps['aria'];
  clearOnBlur: MultiselectProps['clearOnBlur'];
  locale: MultiselectProps['locale'];
  fallbackLocale: MultiselectProps['fallbackLocale'];
  searchFilter: MultiselectProps['searchFilter'];
  allowAbsent: MultiselectProps['allowAbsent'];
  appendToBody: MultiselectProps['appendToBody'];
  closeOnScroll: MultiselectProps['closeOnScroll'];
  breakTags: MultiselectProps['breakTags'];

  $props: MultiselectProps;

  $emit(eventName: 'change', value: any, instance: this): this | void;
  $emit(eventName: 'select', value: any, option: any, instance:this): this | void;
  $emit(eventName: 'deselect', value: any, option: any, instance:this): this | void;
  $emit(eventName: 'search-change', query: string, instance: this): this | void;
  $emit(eventName: 'tag', option: any, instance: this): this | void;
  $emit(eventName: 'option', option: any, instance: this): this | void;
  $emit(eventName: 'create', option: any, instance: this): this | void;
  $emit(eventName: 'paste', e: Event, instance: this): this | void;
  $emit(eventName: 'keydown', e: Event, instance: this): this | void;
  $emit(eventName: 'keyup', e: Event, instance: this): this | void;
  $emit(eventName: 'open', instance: this): this | void;
  $emit(eventName: 'close', instance: this): this | void;
  $emit(eventName: 'clear', instance: this): this | void;
  $emit(eventName: 'max', instance: this): this | void;

  $slots: {
    placeholder: VNode[];
    afterlist: VNode[];
    beforelist: VNode[];
    list: VNode[];
    multiplelabel: VNode[];
    singlelabel: VNode[];
    option: VNode[];
    groupLabel: VNode[];
    tag: VNode[];
    infinite: VNode[];
    nooptions: VNode[];
    noresults: VNode[];
    caret: VNode[];
    clear: VNode[];
    spinner: VNode[];
  };

  activate: (shouldOpen?: boolean) => void;
  ariaActiveDescendant: string | undefined;
  ariaAssist: string;
  ariaControls: string;
  ariaGroupId: (option : any) => string;
  ariaGroupLabel: (label: any) => string;
  ariaLabel: string;
  ariaMultiselectable: boolean;
  ariaOptionId: (option: any) => string;
  ariaOptionLabel: (label: any) => string;
  ariaPlaceholder: any;
  ariaTagLabel: (label: any) => string;
  arias: object;
  backwardPointer: any;
  blur: () => void;
  busy: boolean;
  canPointGroups: boolean;
  classList: ClassList;
  clearPointer: () => void;
  clearSearch: () => void;
  deactivate: () => void;
  disabledProp?: string;
  extendedGroups: Array<any>
  extendedOptions: Array<any>
  externalValue: any;
  filteredGroups: Array<any>
  filteredOptions: any;
  focus: () => void;
  forwardPointer: () => void;
  getOption: (val: any) => any
  handleCaretClick: () => void;
  handleFocusIn: (e: any) => void;
  handleFocusOut: () => void;
  handleGroupClick: (group: any) => void;
  handleKeydown: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleMousedown: (e: Event) => void;
  handleOptionClic: (option: any) => void;
  handlePaste: (e: Event) => void;
  handleSearchInput: (e: Event) => void;
  handleTagRemove: (option: any, e: Event) => void;
  hasMore: boolean;
  hasSelected: boolean;
  infiniteLoader: any;
  input: any;
  internalValue: any;
  isActive: boolean;
  isDisabled: boolean;
  isMax: () => boolean;
  isOpen: boolean;
  isPointed: (option: any) => boolean | undefined;
  isSelected: (option: any) => boolean;
  localize: (target: any) => any;
  mouseClicked: boolean;
  multipleLabelText: string;
  multiselect: any;
  offset: number;
  plainValue: any;
  pointer: any;
  preparePointer: () => void;
  refreshLabels: () => void;
  refreshOptions: (callback: any) => void;
  resolveOptions: (callback: any) => void;
  resolving: boolean;
  search: any;
  select: (option: any) => void;
  selectAll: () => void;
  selectPointer: () => void;
  setPointer: (option: any) => void;
  setPointerFirst: () => void;
  showDropdown: boolean;
  tabindex: number;
  tags: any;
  textValue: any;
  update: (val: any, triggerInput?: boolean) => void;
}

export default Multiselect;