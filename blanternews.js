var entries,feed,feed_url=blog_url.match(/\/$/)?blog_url:blog_url+"/";function recent_post_createEntries(){for(var t=feed.entry,e=[],r=0;r<latest_post;r++){var n=t[r],s=new Object;s.title=n.title.$t,s.href=getHref(n.link),e.push(s)}return e}function getBlogTitle(){return feed.title.$t}function getBlogURL(){return getHref(feed.link)}function getHref(t){for(var e=0;e<t.length;e++){var r=t[e];if("alternate"==r.rel)return r.href}return null}function recent_post_start(t){feed=t.feed,entries=recent_post_createEntries(),recent_post_style(),recent_post_content()}function recent_post_text(){var t="<script src='"+(feed_url+"?alt=json-in-script&callback=recent_post_start&max-results="+latest_post)+"'><\/script>";document.write(t)}function recent_post_style(){document.write("<style type='text/css'>#recent_post{margin:0px;width:auto;background:#fff;}</style>")}function recent_post_content(){var t="<div id='recent_post' title='Breaking News'>";info_text&&(t+="<div class='wrapper'>",t+="<div class='newstitle'>",t+="Breaking News",t+="</div>"),t+="  <marquee style='float:left; margin-left:10px; width:82%' scrollAmount='"+scrolling_speed+"'>";for(var e=0;e<latest_post;e++){var r=entries[e];t+="<a href='"+r.href+"' ",t+="onmouseover='this.parentNode.stop()' onmouseout='this.parentNode.start()'",t+=">"+r.title+"</a>",e!=latest_post-1&&(t+=" | ")}t+="</marquee>",t+="</div>",close_button&&(t+="<div style='float:right;margin-right:15px;'>",t+="<a href='javascript:void(0)' onclick='document.getElementById(\"recent_post\").style.display=\"none\"'>",t+="(x)",t+="</a>",t+="</div>"),document.write(t)}feed_url+="feeds/posts/default",recent_post_text();