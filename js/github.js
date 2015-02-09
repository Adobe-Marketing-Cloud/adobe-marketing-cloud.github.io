function getGithubData(id, full_name) {
                var data;
                $.ajax({
                  url: "https://api.github.com/repos/" + full_name + "?access_token=3b1017357b19fd3b48c6cf3d0861f2dc141d5a26",
                  dataType: 'json',
                  async: true,
                  data: data,
                  success: function(data) {
                                    $("#"+id+" a.project-url").attr("href", data.html_url);
//                                    $("#"+id+" h3.project-title").text(data.full_name);
                                    $("#"+id+" img.author-avatar").attr("src", data.owner.avatar_url);
                                    $("#"+id+" img.author-avatar").attr("alt", data.owner.login);
                                    $("#"+id+" li.meta-author a").attr("href", "https://github.com/" + data.owner.login);
                                    $("#"+id+" span.author-name").text(data.owner.login);
                                    $("#"+id+" p.project-description").text(data.description);
                  }
                });
}