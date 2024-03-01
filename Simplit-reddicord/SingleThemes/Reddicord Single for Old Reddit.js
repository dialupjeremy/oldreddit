// ==UserScript==
// @author      @Eramdam, @dialupjeremy
// @description Applies the reddicord subreddit theme for Reddit's old design, regardless of browser or OS appearance. The URL defaults to old.reddit.com to accommodate the Yesterday For Old Reddit extension by Team Doko: https://addons.mozilla.org/firefox/addon/yesterday-for-old-reddit/ | https://apps.apple.com/app/yesterday-for-old-reddit/id1603279883 | r/YesterdayForOldReddit
// @match       *://old.reddit.com/*
// @name        Reddicord Single for Old Reddit
// @version     1.0
// ==/UserScript==

// reddicord
const reddicord = [
  // Custom CSS for the reddicord theme
  `
  /* ### BODY ### */ body{background:#36393F} /* ### END BODY ### */ /* ### HEADER ### */ #header { background: #2F3136; border-bottom: 1px solid #292B2E } #header-bottom-left {height: 54px} #sr-header-area { background: #202225; border-bottom: 1px solid #292B2E; color: #A6A7A8 } #sr-header-area a { color: #A6A7A8 } #sr-header-area a:hover, #sr-header-area .selected a, #sr-header-area a.RESShortcutsCurrentSub, #RESShortcuts.sr-bar a.subbarlink.RESShortcutsCurrentSub { color: #7289DA; text-decoration: none } /* Top left dropdown */ .dropdown.srdrop .selected {color: #A6A7A8} #sr-header-area .drop-choices { background: #2F3136; border: 0; border-right: 1px solid #292B2E; margin-left: 0px !important; z-index: 99 } .drop-choices a.choice {padding-left: 6px} .drop-choices a.choice:hover {background: #292B2E} #header-img { margin: 4px 15px 0 10px; border-radius: 100px; background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/snootransparent.png") !important; background-color: #36393F !important; background-position: 0 0; width: 0px !important; padding-left: 45px; height: 45px !important; transition: all .25s ease; -moz-transition: all .25s ease; -webkit-transition: all .25s ease } #header-img:hover { border-radius: 12px; background-color: #7289DA !important } .pagename { color: #fff; line-height: 49px; border-right: 1px solid #4A4C52; padding: 3px 10px 3px 0px; font-variant: normal } .pagename a { color: #fff; transition: all .25s ease; -moz-transition: all .25s ease; -webkit-transition: all .25s ease } .pagename a:hover { text-decoration: none; color: #7289DA } body.with-listing-chooser #header .pagename{position:inherit}/*Fixes pagename on All & Popular*/ /* USER BAR */ #header-bottom-right { position: absolute !important; z-index: 9; top: 82px !important; right: 10px !important; background: transparent !important; } .user {color:#A6A7A8} .logout a {color:#7289DA} /* END USER BAR */ /* ### END HEADER ### */ /* ### TABMENU ### */ #header { z-index: 9 } #header:after { content: ""; display: block; position: absolute; top: /*65px*/ 74px; left: 0px; right: 0px; height: 39px; background-color: #36393E; border-bottom: 1px solid #292B2E; z-index: 8 } #header .tabmenu { position: absolute; z-index: 9; top: 80px; left: 11px; } #header .tabmenu li a { color: #dcddde; font-weight: normal; background: transparent; padding: 2px 6px 2px 6px; border-radius: 4px; font-size: small; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease; } #header .tabmenu li a:hover { color: #dcddde; background: #2F3136; opacity: 1; } #header .tabmenu li.selected a { border: 0px; opacity: 1; background: #7289DA; color: #fff; } #header .tabmenu li.selected a:hover { background: #6C82CF; } /* ### END TABMENU ### */ /* ### SIDEBAR ### */ .side { background: transparent; color: #A6A7A8; margin-top: 40px; padding: 5px; padding-top: 0px; margin-right: 15px; margin-left: 10px; margin-bottom: 75px; } .side:after { position: absolute; display: block; padding: 15px 0; margin: 20px 0 0 -6px; color: #7289DA; background: #2F3136; border: 1px solid #26292E; content: "theme - /r/Reddicord by /u/titleproblems"; width: 309px; text-align: center; font-size: x-small; } .titlebox { background: #2F3136;border:1px solid #26292E; margin: 20px -5px; padding: 4px; border-radius: 3px; } .titlebox .md { color: #99aab5; } #search { position: absolute; z-index: 10; top: 32px; right: 9px; width: 170px } #search input[type="text"] { background: #202225; color: #b9bbbe; border: 0px; border-radius: 3px; height: 28px; width: 170px; /*50px smaller*/ font-weight: 500; font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif; text-transform: capitalize } #searchexpando { position: absolute; width: 290px; right: -10px; box-shadow: 0px 0px 10px rgba(0,0,0,.3) } .infobar { background: #36393F; border: 1px solid #262C33 } /* Submit buttons */ .morelink { letter-spacing: 0px; border: 0px; background: none; } .morelink a { background: #7289DA; color: #fff; padding: 3px 0px 3px 0px; border-radius: 3px; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease; } .morelink a:hover {background:#6D83D0} .morelink:hover {background:none} .morelink .nub { display: none; } .disabled .morelink a {color: rgba(0,0,0,.6)} .sidebox.create { background: #2F3136; border: 1px solid #202225; border-radius: 3px; padding: 5px 5px 0px; margin: 0 -5px } .sidebox.create .morelink a{background:#43B581} .sidebox.create .morelink a:hover{background:#3CA374} .disabled .morelink a,.disabled .morelink a:hover{background:#2F3136;color:#b2b2b2} .disabled .morelink,.disabled .morelink:hover{background:transparent} /* Subscribe button */ .fancy-toggle-button .active { position: absolute; z-index: 10; top: 32px; right: 210px; font-size: 14px; text-align: center; font-weight: normal; width: 100px; padding: 4px 0px 4px 0px !important; background: #7289DA !important; background-image: none; color: #FFF !important; border: 0px; border-radius: 3px; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease; background-image: none !important; } .fancy-toggle-button .remove { background: #36393E !important; color: #A6A7A8 !important; } .fancy-toggle-button:after { /* line between subscribe button and search bar */ display: inline-block; position: absolute; top: 34px; right: 194px; width: 1px; height: 25px; background: #4A4C52; content: '.'; font-size: 0px; z-index: 11; } /* END subscribe button */ .subscribers { position: absolute; top: 32px; right: 325px; z-index: 11; background-color: #36393E; padding: 6px; border-radius: 3px; } .titlebox h1.redditname { text-align: center; text-transform: uppercase; padding-top: 4px; } .titlebox h1.redditname a { color: #dcddde } .users-online { font-size: x-small; text-align: center; border-top: 1px solid #36393F; padding-top: 3px; margin-right: -4px; margin-left: -4px; } .users-online:before { display: none } .titlebox .fancy-toggle-button { display: flex } /* Removes some white space where sub button used to be, somehow? */ .titlebox form.toggle, .leavemoderator {background:transparent} /* You are a moderator / approved submitter */ .titlebox .leavemoderator:before, .titlebox form.leavecontributor-button:before {display:none} .titlebox .leavemoderator, .titlebox form.leavecontributor-button { text-align: center; color: #A6A7A8; padding: 0 0 } .titlebox .leavemoderator a, .titlebox form.leavecontributor-button a { color: #7289DA } /* User flair select box */ .titlebox .flairselector.drop-choices.active { border: 0px; box-shadow: none; border-top: 1px solid #36393F; border-bottom: 1px solid #36393F; } .side .flairselector.drop-choices { width: 300px !important; right: 16px !important; margin-top: 18px; left: auto !important; } .side .flairselector h2 { background: #292B2E; margin: -4px -4px 3px -4px; border-bottom: 1px solid #36393F; color: rgb(153,170,181); } .side .flairselector li { border: 0px; padding: 2px } .side .flairselector form { border-top: 1px solid #3F4247; margin-left: -4px; margin-right: -4px; padding-bottom: 3px; } /* End user flair select */ .titlebox .usertext-body { margin: 7px -5px 0 -5px; padding: 0 5px 0 5px; border-top: 1px solid #36393F } .sidebox .spacer { background: transparent; border: 0 } .sidebox .subtitle {color:#828386} .titlebox .bottom { border-top: 1px solid #36393F; margin: 15px -5px 0; padding: 5px 5px 0; color: #A6A7A8 } .sidecontentbox .title h1 { color: #787A7E; font-weight: bold } .sidecontentbox .content { border: 0; overflow: visible; max-width: 300px } /*Moderation Tools*/ .sidecontentbox .collapse-button { color: #787A7E; border: 1px solid hsla(0,0%,100%,.1); background: #2F3136 } .flat-vert li a { background: transparent; color: #787A7E !important } .flat-vert li a:hover {color:hsla(0,0%,100%,.6)!important} /*Moderators*/ .sidecontentbox a.helplink { color: #7289DA; margin-top: 0px } /*Recently Viewed*/ .gadget .midcol { width: 21px; margin-right: 3px } .gadget .linkflairlabel { border: 0px; border-right: 1px solid #787A7E; border-radius: 0px; color: #7289DA; padding: 0px 4px 0px 0px; opacity: 1 } .gadget a.reddit-link-title { color: hsla(0,0%,100%,.7); font-size: 12px } .gadget small, .res-voteEnhancements-highlightScores span.score {color:#787A7E !important} .gadget a.reddit-comment-link, .gadget .right a, .account-activity-box a {color:#7289DA} .gadget .score {margin-left:0px} /* CHECKBOXES */ .titlebox form.toggle input[type="checkbox"] { display: none } .titlebox form.toggle input[type="checkbox"] + label { line-height: 20px; height: 20px; position: relative; display: block; padding-left: 26px; cursor: pointer; box-sizing: border-box } .titlebox form.toggle input[type="checkbox"] + label:before,.titlebox form.toggle input[type="checkbox"] + label:after { content: ''; position: absolute; display: block; top: 0; left: 0; box-sizing: border-box } .titlebox form.toggle input[type="checkbox"] + label:before { height: 20px; width: 20px; border: 1px solid hsla(0,0%,100%,.2); border-radius: 5px } .titlebox form.toggle input[type="checkbox"] + label:after { height: 10px; width: 10px; background-color: transparent; border-width: 5px; border-style: solid; border-color: transparent; margin-top: 5px; margin-left: 5px } .titlebox form.toggle input[type="checkbox"]:checked + label:after { /* Checkmark */ border-color: hsla(0,0%,100%,.4); border-radius: 5px } .titlebox form.toggle input[type="checkbox"] + label:after { height: 2px; width: 2px; margin-left: 4px; margin-top: 4px; border-width: 3px } .titlebox form.toggle input[type="checkbox"] + label { line-height: 14px; height: 14px; padding-left: 20px; color: hsla(0,0%,100%,.4) } .titlebox form.toggle input[type="checkbox"] + label:before { height: 14px; width: 14px } /* CHECKBOXES */ .side h1 a {color:#7289DA} /* ### END SIDEBAR ### */ /* ### CONTENT ### */ .content { margin-top: 50px; overflow: hidden; } .link { padding: 3px 0px 10px 0px; border-bottom: 1px solid #3E4146; } .link .title a { color: #fff !important; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease; } .link .title a:hover,  .link .title a:visited:hover { color: #7289DA !important; } .link .title a:visited { color: #787A7E !important; } .title .domain { color: #9A9A9A; opacity: 0.3; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease } .title .domain a, .title .domain a:visited { color: #9A9A9A !important } .title .domain a:hover { color: #9A9A9A !important; text-decoration: none } .link .domain:hover {opacity: 0.5} /* Thumbnails */ .thumbnail { /*margin-left: 6px; SQUARE margin-right: 10px; border-radius: 4px; border: 1px inset #292B2E;*/ width: 52px; height: 51px; margin-left: 15px; margin-right: 17px; border-radius: 100px; border: 1px solid #292B2E; } .thumbnail.self { background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/thumbnails.png"); width: 52px; height: 51px; background-position: 0px 0px; background-repeat: no-repeat; margin-left: 15px; margin-right: 17px; border: 1px solid transparent; } .thumbnail.default { background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/thumbnails.png") !important; width: 52px; height: 51px; background-position: 0px 52px !important; background-repeat: no-repeat; margin-left: 15px; margin-right: 17px; border: 1px solid transparent; } .thumbnail.image { background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/thumbnails.png") !important; width: 52px; height: 51px; background-position: 0px 105px !important; background-repeat: no-repeat; margin-left: 15px; margin-right: 17px; border: 1px solid transparent; } .thumbnail.nsfw { background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/thumbnails.png") !important; width: 52px; height: 51px; background-position: 0px 162px !important; background-repeat: no-repeat; margin-left: 15px; margin-right: 17px; border: 1px solid transparent; } .thumbnail.spoiler, .link.stickied .thumbnail.self { background: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/thumbnails.png") !important; width: 52px; height: 51px; background-position: 0px 218px !important; background-repeat: no-repeat; margin-left: 15px; margin-right: 17px; border: 1px solid transparent; } /* Stickied posts */ .link.stickied { background: #2F3136; border: 1px solid #26292E; padding-top: 8px; padding-bottom: 8px; border-radius: 3px; } .link.stickied .title a,.link.stickied .title a:hover,.link.stickied .title a:visited { color: #43B581 !important } .link.stickied .domain {display: none} /* Announcement to https://i.imgur.com/dUNl4ca.png */ div.content span.stickied-tagline {visibility: hidden} div.content span.stickied-tagline:before { visibility: visible; padding: 0px 3px 0px 3px; font-size: 10px; color: #43B581; content: "stickied"; opacity: 1; transition: all 0.5s ease; -moz-transition: all 0.5s ease; -webkit-transition: all 0.5s ease } .link:hover .stickied-tagline:before {opacity: 0.8} body.hot-page .stickied+div+.link:not(.stickied) { margin-top: 12px!important; box-shadow: 0px -11px #36393E, 0 -12px #36393E } /* Usernames */ a.author, .user a { color: #7289DA !important; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease } a.author:hover, a.submitter:hover, a.friend:hover { text-decoration: none; opacity: .9 } /* Submitter */ .author.submitter, .res .res-userHighlight .tagline .author.submitter, .res .res-userHighlight .crosspost-preview-tagline .author.submitter { background: #7289DA !important; border-radius: 3px; color: #fff !important; padding: 0px 3px 0px 3px } .res .res-userHighlight .tagline .author.submitter:hover, .res .res-userHighlight .crosspost-preview-tagline .author.submitter:hover { background: #7289DA !important; } a.submitter { visibility: visible; background: #7289DA; border-radius: 3px; color: #fff !important; padding: 0px 3px 0px 3px } /* Friend */ .author.friend, .res .res-userHighlight .tagline .author.friend, .res .res-userHighlight .crosspost-preview-tagline .author.friend { background: #ff4500 !important; border-radius: 3px; color: #fff !important; padding: 0px 3px 0px 3px } .res .res-userHighlight .tagline .author.friend:hover, .res .res-userHighlight .crosspost-preview-tagline .author.friend:hover { background: #ff4500 !important; } a.friend { visibility: visible; background: #ff4500; border-radius: 3px; color: #fff !important; padding: 0px 3px 0px 3px } .author.moderator, .res .res-userHighlight .tagline .author.moderator, .res .res-userHighlight .crosspost-preview-tagline .author.moderator { background: #2E862E !important; } .res .res-userHighlight .tagline .author.moderator:hover, .res .res-userHighlight .crosspost-preview-tagline .author.moderator:hover { background: #2E862E !important; } a.moderator { visibility: visible; background: #2E862E; border-radius: 3px; color: #fff !important; padding: 0px 3px 0px 3px } .userattrs { visibility: hidden; margin-left: -4px } /* New voting arrows */ .thing .arrow { height: 13px; width: 21px; } .midcol { margin-right: 3px; } .arrow.up { background-image: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/up.png"); background-position: 0 0; height: 13px; width: 21px; opacity: .5; } .arrow.upmod { background-image: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/upMod.png"); background-position: 0 0; height: 13px; width: 21px; opacity: 1; } .link .score.likes { color: #FF5619; } .arrow.down { background-image: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/down.png"); background-position: 0 0; height: 13px; width: 21px; opacity: .5; } .arrow.downmod { background-image: url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/downMod.png"); background-position: 0 0; height: 13px; width: 21px; opacity: 1; } .link .score.dislikes { color: #7289DA; } /* END New voting arrows */ /* Expando */ .expando-button { background: #2F3136 !important; border: 1px solid #292B2E; width: 22px !important; height: 22px !important; border-radius: 2px; opacity: 1; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease } .expando-button.selftext.collapsed, .res .expando-button.selftext.collapsed, .res .expando-button.image.collapsed, .expando-button.image.gallery.collapsedExpando, .expando-button.image.collapsedExpando, .expando-button.video.collapsed, .expando-button.video-muted.collapsed, .res .expando-button.video.collapsed, .res .expando-button.video-muted.collapsed { background:transparent url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/expandDown.png") no-repeat 50% 50% !important /* expandDown */ } .expando-button.selftext.expanded, .res .expando-button.selftext.expanded, .res .expando-button.image.expanded, .expando-button.video.expanded, .expando-button.video-muted.expanded, .res .expando-button.video.expanded, .expando-button.video-muted.expand { background:transparent url("//raw.githubusercontent.com/dialupjeremy/oldreddit/main/Simplit-reddicord/ReddicordImages/expandUp.png") no-repeat 50% 50% !important /* expandUp */ } /* Expando "CLICK TO SEE SPOILER */ .expando-gate.expando-gate--interstitial {background:#202225} .expando-gate {color:#7289DA} .expando-gate .expando-gate__show-once {border:1px solid #7289DA} .nsfw-stamp { color: #fff; border-color: #F04747; background: #F04747; font-weight: bold; } .spoiler-stamp { color: #fff; border-color: #7289DA; background: #7289DA; font-weight: bold; } .oc-tag { background: #7289DA; color: #fff; font-weight: bold; font-size: 10px; line-height: 13px; } /*.entry .buttons li a, .tagline { color: #85878B; }*/ .entry .tagline{margin:3px 0;color:#85878B} .entry .flat-list{margin-top:4px} .entry .buttons li a { background: #3E4146; padding: 2px 4px; border-radius: 2px; color:#85878B } .entry .buttons li a:hover { background: #7289DA; color: #fff; text-decoration: none; } .stickied .entry .buttons li a{background:#36393F} .tagline a {color:#7289DA} .link .rank { color: #787A7E; margin-right: 3px; } /* Prev & Next page buttons */ .nav-buttons {padding:3px} .prev-button a, .next-button a { background: #7289DA; color: #fff; border: 0px; padding: 2px 5px } .prev-button a:hover, .next-button a:hover {border:0px;background:#6D83D0} .nextprev .separator {color:#4A4C52;border-left:1px solid #4A4C52} .link.promotedlink.promoted, .link.promotedlink.external { background: #36393E; } .error {color:#cb4040} /* Markdown */ .md hr { background: #3F4247; height: 1px; } .side .md hr { margin: 0px -4px 0px -5px } .md blockquote { border-left: 2px solid #7289DA; color: rgba(153,170,181,.6); } .md pre, .new-comment .md pre, .link .md :not(pre) > code { /* Code */ background: #4A4D53; border: 1px solid #292B2E; color: #7ECC66; } .md td, .md th { /* Tables */ border: 1px solid #4A4D53; } /* END Markdown */ .menuarea { margin: -5px 0 3px 0; border-bottom: 1px solid #3E4146; color: hsla(0,0%,100%,.7) } .menuarea .dropdown.lightdrop .selected { color: #7289DA; text-decoration: none } .drop-choices { background: #2F3136; border: 1px solid #292B2E; box-shadow: 0px 0px 10px rgba(0,0,0,.3) } .drop-choices a {color:#7289DA} /* MODQUEUE STUFF */ .thing .title {color:#7289DA} .parent {color:#99AAB5} .subreddit {color:#7289DA} /* Reports */ .entry .buttons li.reported-stamp { border: 0px !important; background: #7289DA } ul.report-reasons { background: #4A4D53; border: 1px solid #292B2E; border-radius: 4px; color: #99AAB5 } .pretty-button {border:0px} .pretty-button.negative {background:#D45652} /* SPAM */ .pretty-button.negative.pressed {background:rgba(212,86,82,.3)} .pretty-button.neutral {background:#99AAB5} /* Remove and Ignore */ .pretty-button.neutral.pressed {background:rgba(153,170,181,.3)} .pretty-button.positive {background:#A7DB82} /* Approve */ .pretty-button.positive.pressed {background:rgba(167,219,130,.4)} .thing.spam {background:rgba(212,86,82,.3)} body .thing.approved {background:rgba(167,219,130,.2)!important} body .thing.removed {background:rgba(212,86,82,.3)!important} body .thing.spam {background:rgba(212,86,82,.3)!important} /* END MODQUEUE STUFF */ /* Subreddit Settings Page */ .linefield {background:#2F3136} .linefield.mobile { background: #2F3136; border: 1px solid #202225 } .linefield textarea, .linefield input[type="text"], .linefield input[type="password"] { background: #494C52; border: 0px; border-radius: 4px; padding: 4px; color: hsla(0,0%,100%,.7); box-shadow: none; } label, .linefield .title { color: #7289DA } td, .gray { color: hsla(0,0%,100%,.7)} /* END Subreddit Settings Page */ /* Rules mod page*/ .modtools-page .content {margin-top:40px!important} /* Flair page */ .flair-settings + .tabmenu {margin-left:-3px} .flair-settings + .tabmenu li a { background: #4A4D53; color: #fff; border: 1px solid #292B2E; border-bottom: 1px solid #2F3136 } .flair-settings + .tabmenu li.selected a { border: 1px solid #292B2E; border-bottom: 1px solid #2F3136; background: #2F3136; color: #fff } .tabpane-content { background: #2F3136; border: 0px; border: 1px solid #292B2E } .flairlist .header {color:hsla(0,0%,100%,.7)} .flair-entry { margin-left:10px} .flairlist .flaircell input[type="text"] { background: #494C52; border: 0px; border-radius: 4px; color: hsla(0,0%,100%,.7); padding-left: 2px; box-shadow: none } .usertable > .toggle { background: #2F3136; border: 1px solid #7289DA } .usertable > .toggle .togglebutton, .usertable > .toggle .error { border-left: 1px solid #7289DA; color: #7289DA } /* END Flair page */ .post-sharing { background: #2F3136; border: 1px solid #292B2E } .post-sharing .c-close {background-color:#292B2E} /* ### END CONTENT ### */ /* ### MESSAGES AND MOD MAIL ### */ .correspondent.reddit.rounded, .info-area.correspondent { background: transparent !important; border: 1px solid #7289DA !important; color: #7289DA !important } .correspondent .subreddit-name, .expand-btn { color: #7289DA } .subject-text { color: hsla(0,0%,100%,.9) } .messages-page .md p { color: hsla(0,0%,100%,.7) } .message.message-reply.recipient > .entry .head, .message.message-parent.recipient > .entry .head, .message .tagline { color: hsla(0,0%,100%,.4) } .message.message-reply:not(.threaded) .entry, .message.message-parent:not(.threaded) .entry { border-left: 2px dashed #202225 } .menuarea .flat-list li a { color: #7289DA; } .menuarea .flat-list li.selected a { color: #fff; } /* ### END MESSAGES AND MOD MAIL ### */ /* ### COMMENT PAGE ### */ .md {color: #99aab5;} .md a {color: #7289DA;} .md a:hover {color: #6D83D0;} /* Post content */ .link .usertext-body .md { background: #2F3136; border: 1px solid #26292E; border-radius: 4px; } /* = Sidebar Link Info = */ .linkinfo { background-color: #2F3136; border: 1px solid #26292E; border-radius: 3px; margin-right: -5px; margin-left: -5px; color: #b2b2b2 } .linkinfo .date { text-align: center; padding-top: 1px; padding-bottom: 6px } .linkinfo .date span { display: none; } .linkinfo .date time:before { display: inline-block; content: 'Submitted on'; font-weight: normal; margin-right: 4px } .linkinfo .score { text-align: center; text-transform: uppercase; font-size: 15px; padding: 6px 0; border-bottom: 1px solid #36393F; border-top: 1px solid #36393F; margin-left: -5px; margin-right: -5px } .linkinfo .score .number, .linkinfo .score .word { font-size: 15px } .linkinfo .shortlink { padding: 0 0 4px; visibility: hidden } .linkinfo input#shortlink-text { visibility: visible; background: #4F545C; color: #A6A7A8; text-align: center; border: 0; border-radius: 3px; width: 205px; padding: 5px; margin: 6px 0 0 0 } /* = END Sidebar Link Info = */ /* COMMENT SECTION */ /* Panestack Title */ .panestack-title { margin: 10px 0px 5px 0px; padding: 0px 0px 10px 10px; border-bottom: 1px solid #3E4146; color: #707A7E; } .panestack-title a.title-button { color: #7289DA } .panestack-title a.title-button.gold { border: none; color: #2F3136 } /* Comment box */ textarea { background: #4A4D53; border: 1px solid #2F3136; color: #fff; } button { background: #7289DA; border: 0px; border-radius: 3px; color: #fff; transition: all 0.5s ease; -moz-transition: all 0.5s ease; -webkit-transition: all 0.5s ease } button:hover { background: #6D83D0; } a.reddiquette, .bottom-area .toggle .option.active {color: #7289DA} /* Comment content */ .stickied.comment { border: 1px solid #7289DA; } .content .stickied.comment .stickied-tagline, .content .stickied.comment .stickied-tagline::before { visibility: visible; color: #7289DA; background: transparent } .comment { background: #2F3136; border: 1px solid #292B2E; padding: 5px; border-radius: 4px; margin-bottom: 5px; } .comment .child {border: 0px;} .comment .midcol {width: 23px;} /* Vote arrow width fix */ .new-comment .usertext-body { /* GOLD New Comment */ background: rgba(211,175,47,.1); border: none; } .gold-accent.comment-visits-box { background: transparent; border: 1px solid rgba(211,175,47,.3); color: #99aab5; margin-left: 10px; border-radius: 4px; } /* Load more comments */ .morecomments a {color:#7289DA} /* "Viewing a single comment" notif */ .commentarea .infobar { margin-left: 10px; margin-right: 0px; } .infobar { border-radius: 4px; color: #fff; background: #2F3136; } .infobar a {color: #7289DA;} .usertext.border .usertext-body {background: #36393E;} /* Changes color of single comment */ /* Video player sticky on scroll */ .pinnable-content.pinned { background: #2F3136 !important; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.4) !important } /* ### END COMMENT PAGE ### */ /* ### SUBMIT PAGE ### */ .submit-page .content { margin-top: 35px; } .submit-page .content h1 {display: none;} /* SUBMIT PAGE TABMENU */ .submit-page .tabmenu { position: absolute; top: 80px; left: 1px; z-index: 99; } .submit-page .tabmenu.formtab a { font-size: small; background-color: transparent; border: 0px; padding: 2px 6px 2px 6px; border-radius: 4px; color: hsla(0,0%,100%,.7); margin: 0px 3px; transition: all 0.25s ease; -moz-transition: all 0.25s ease; -webkit-transition: all 0.25s ease } .submit-page .tabmenu.formtab a:hover { color: hsla(0,0%,100%,.7); background: #2F3136; } .submit-page .tabmenu.formtab li.selected a { color: #fff; background: #7289DA; } .submit-page .tabmenu.formtab li.selected a:hover { background: #6C82CF; } /* END SUBMIT PAGE TABMENU */ .formtabs-content { padding-top: 0px; border: 0px; } .roundfield { background: #2F3136; color: hsla(0,0%,100%,.7); border-radius: 0px; } .roundfield textarea, .roundfield input[type="text"], .roundfield input[type="url"], .roundfield input[type="password"], .roundfield input[type="number"], #compose-message .roundfield select { background: #494C52; border: 0px; border-radius: 4px; padding: 4px; color: hsla(0,0%,100%,.7); } /* CHOOSE WHERE TO POST */ #reddit-field.roundfield a { color: #7187D7; font-size: x-small; } #reddit-field.roundfield input[type="text"] { color: hsla(0,0%,100%,.3) } #newlink-with-image-upload .image-upload-drop-target { border: 2px solid #494C52 !important; background: #2F3136 !important } #newlink-with-image-upload .clear-input-button {background:#2F3136} /* Submission text */ .submit_text h1 { display: block !important; color: #7289DA } .content.submit .info-notice { border: 1px solid #7289DA; background: #36393E; } .content.submit .info-notice a { color: #7289DA; text-decoration: none; } @media (min-width: 1120px) { .submit-page #newlink { margin-left: 250px; } #reddit-field.roundfield { position: absolute; top: 113px; left: 0px; width: 200px; border-radius: 0px; border-right: 1px solid #292B2E; border-bottom: 1px solid #292B2E; font-size: medium; } #reddit-field.roundfield input[type="text"] { width: 192px; } } /* END CHOOSE WHERE TO POST */ /* ### END SUBMIT PAGE ### */ /* ### FRONT PAGE ### */ /* Promoted posts */ .organic-listing {background:#2F3136;border:1px solid #292B2E;margin-bottom:16px} .organic-listing .link {background:#2F3136;border:0px;min-height:60px} .organic-listing .nextprev .arrow {opacity:.05} .organic-listing:hover .nextprev .arrow {opacity:.2} /* Trending */ .trending-subreddits {margin-left:-50px;margin-top:0px} .trending-subreddits strong {color:#68AD52} .trending-subreddits li a {color:#7289DA} /* GRIPPY */ .grippy{background:#36393E!important;border-left:1px solid #292B2E!important;z-index:5 !important;} .grippy:hover:after{background:#2F3136!important;} .grippy:after{border-right:1px solid #292B2E!important;} .grippy:before{opacity:.8!important;} body.with-listing-chooser .listing-chooser { top: 114px; background: #2F3136; } .listing-chooser .intro { background: #292B2E; border: 1px solid #202225; color: #99aab5; } .listing-chooser li { background: #292B2E; border: 1px solid #202225; } .listing-chooser li a{color: #7289DA;} .listing-chooser li.selected { background: #292B2E; border-color: #7289DA; box-shadow: none; border-right: 0px; z-index: 4 !important; } .listing-chooser li.gold-perks{background: #292B2E;} /* END GRIPPY */ /* ### END FRONT PAGE ### */ /* ### PROFILE PAGE ### */ /* ### END PROFILE PAGE ### */ /* ### REDDIT ENHANCEMENT SUITE ### */ form.toggle.res-sr-style-toggle {display:none} .res-fancy-toggle-button { width: 135px; text-align: center; border: 0!important; background: #36393E !important; color: hsla(0,0%,100%,.4) !important; overflow: visible; margin: 0 0 5px 0 !important; transition: all .25s ease; -moz-transition: all .25s ease; -webkit-transition: all .25s ease } .res-fancy-toggle-button:hover{background:#7289DA!important;color:#fff!important} .res-fancy-toggle-button.RESshortcutside + .res-fancy-toggle-button.RESDashboardToggle, .res-fancy-toggle-button.RESDashboardToggle + .res-fancy-toggle-button.RESshortcutside {margin-left:6px!important} .res .RES-keyNav-activeElement, .res .entry.res-selected, .res .entry.res-selected .md-container { background-color: #2F3136 !important; background: #2F3136 !important; border-right: 3px solid #7289DA !important; } body.res-commentBoxes .comment { border: 1px solid #292B2E !important } body.res-commentBoxes .comment, body.res-commentBoxes .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment { background: #2F3136 !important } body.res-commentBoxes .comment .comment, body.res-commentBoxes .comment .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment, body.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment { background: #36393E !important } #progressIndicator, .NERPageMarker { background: #2F3136 !important; border: 1px solid #292B2E !important; color: hsla(0,0%,100%,.7) !important } #progressIndicator a, #progressIndicator h2 {color:#7289DA!important} .nextprev a, .nextprev a:hover { background: #7289DA; border: 0px; color: #fff } /* ### END REDDIT ENHANCEMENT SUITE ADDON ### */ /* ### TOOLBOX ADDON ### */ .tb-bracket-button { background: transparent !important; color: #B9BBBE !important; border: 1px solid #787A7E !important; border-radius: 10px !important; padding: 0 2px !important; opacity: 0.5 !important } body.mod-toolbox .tb-loadFlat.tb-general-button, body.mod-toolbox .tb-action-button.tb-settings-export, body.mod-toolbox .tb-action-button.tb-settings-import, body.mod-toolbox .tb-action-button.tb-sample-sound, body.mod-toolbox .tb-action-button.tb-save, #tb-toolbox-showsettings .tb-action-button, input#utagger-save-user.utagger-save-user.tb-action-button { background: #7289DA !important; border: 0px !important; border-radius: 3px !important; color: #fff !important } body.mod-toolbox .tb-loadFlat.tb-general-button:hover, body.mod-toolbox .tb-action-button.tb-settings-export:hover, body.mod-toolbox .tb-action-button.tb-settings-import:hover, body.mod-toolbox .tb-action-button.tb-sample-sound:hover, body.mod-toolbox .tb-action-button.tb-save:hover, #tb-toolbox-showsettings .tb-action-button:hover, input#utagger-save-user.utagger-save-user.tb-action-button:hover { background: #6D83D0 !important; color: #fff !important } body.mod-toolbox .tb-page-overlay a, body.mod-toolbox .tb-popup a, body.mod-toolbox .tb-toolbar a { color: #7289DA !important } body.mod-toolbox #tb-bottombar { background: #2F3136 !important; border-top: 1px solid #292B2E !important } body.mod-toolbox #tb-toolbar-mysubs { background: #292B2E; border-right: 1px dotted #202225; border-left: 1px dotted #202225; color: #7289DA } .mod-toolbox .tb-window-content input[type="text"] { background: #4A4D53; border: 0px; padding: 4px } body.mod-toolbox .tb-page-overlay { background: rgba(32,34,37,0.9) } .mod-toolbox .tb-window-header, .tb-window-footer, .tb-popup-header, .tb-popup-footer { background: #2F3136 !important; color: #C1C2C3 } .tb-help-main, .mod-toolbox .close {background:#4A4D53!important} .tb-help-main:hover, .mod-toolbox .close:hover {background:#7289DA!important} body.mod-toolbox .tb-window-wrapper { background: #36393E; box-shadow: none; border: 1px solid #202225 } body.mod-toolbox .tb-window-content p:not([class^="codemirror"]) { border-bottom: 1px solid #3E4146 } .mod-toolbox .tb-window-content label, p#tb-toolbox-settingssub, .tb-window-content p { color: #C1C2C3 !important } label.backup-warning.sad {color:#F04747!important} body.mod-toolbox .tb-window-tabs a { background: #2F3136 !important; border-bottom: 1px solid #3E4146 !important; border-right: 1px solid #3E4146 !important } .mod-toolbox .tb-window-tabs a.active, .mod-toolbox .tb-window-tabs a:hover { background: #7289DA !important; } .mod-toolbox .tb-window-tabs a.tb-module-disabled { color: #C1C2C3 !important; } .mod-toolbox .tb-window-tab.about h3 { color: #C1C2C3; border-top: 1px solid #3E4146 !important; } body.mod-toolbox .tb-popup { background: #36393E; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 10px 1px; } body.mod-toolbox #tb-notification-alert { background: #2F3136; border: 1px solid #7289DA; box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 10px 1px; color: #fff } /* Comment flatview */ body.mod-toolbox #tb-flatview-search{background:#2F3136;border:1px solid #7289DA;padding:10px;color:#99aab5}body.mod-toolbox #tb-flatview-search-count{background:#7289DA;padding:3px 3px 2px;position:relative;bottom:1px}body.mod-toolbox #tb-flatview-search-content.tb-flatview-search-input,body.mod-toolbox #tb-flatview-search-name.tb-flatview-search-input{background:#4A4D53;border:1px solid #2F3136;padding:1px;color:#fff} /* MODQUEUE STUFF */ body.mod-toolbox .menuarea.modtools {background:#2F3136;border:1px solid #292B2E} body.mod-toolbox .menuarea.modtools .tb-general-button, body.mod-toolbox .menuarea.modtools .tb-general-button:hover {background:#99AAB5;color:#000;border:0px;border-radius:3px} body.mod-toolbox .menuarea.modtools .pretty-button.negative {background:#D45652;color:#000;border:0px;border-radius:3px!important} body.mod-toolbox .menuarea.modtools .pretty-button.neutral {background:#99AAB5;color:#000;border:0px;border-radius:3px!important} body.mod-toolbox .menuarea.modtools .pretty-button.positive {background:#A7DB82;color:#000;border:0px;border-radius:3px!important} /* ### END TOOLBOX ADDON ### */ /* ### LINK FLAIR ### */ .linkflairlabel { background: transparent; color: #B9BBBE; border: 1px solid #7289DA; border-radius: 10px; padding: 0 5px; } /* ### END LINK FLAIR ### */ /* ### USER FLAIR ### */ .flair { background: transparent; color: #B9BBBE; border: 1px solid #7289DA; border-radius: 10px; padding: 0 5px } /* ### END USER FLAIR ### */ /* ### OTHER ### */ .flat-list a {color:#7289DA} #sr-header-area .redesign-beta-optin{display:none} /* Remove beta opt-in in header */ .sheets{margin:0} /* Stylesheet fix */ /* FOOTER */ .footer-parent {border-top:1px solid #3E4146;margin-top: 10px} .footer {border:0px} .footer .col {border-left:1px solid #3E4146} .flat-vert.title {color: #fff} .flat-vert li a {color:rgba(255,255,255,.6)} .flat-vert li a:hover {color:#fff;text-decoration:none} .bottommenu {color:rgba(255,255,255,.5)} /* ### END OTHER ### */ /* ### MOBILE & TABLET ### */ .mobile-web-redirect-bar, /* Disable "SWITCH TO MOBILE" bar */ .mobile-web-redirect { display: none; }
  `,
];

  // Create style elements and append them to the document head
  const styleEl = document.createElement('style');
  styleEl.setAttribute('ref', 'applied_subreddit_stylesheet');
  document.head.appendChild(styleEl);

  // Use textContent to insert the CSS content
  styleEl.textContent = reddicord[0];