function getGithubData(id, full_name) {
                var data;
                $.ajax({
                  url: "https://api.github.com/repos/" + full_name,
                  dataType: 'json',
                  async: true,
                  data: data,
                  success: function(data) {
                                    $("#"+id+" a.project-url").attr("href", data.html_url);
                                    $("#"+id+" img.author-avatar").attr("src", data.owner.avatar_url);
                                    $("#"+id+" img.author-avatar").attr("alt", data.owner.login);
                                    $("#"+id+" li.meta-author a").attr("href", "https://github.com/" + data.owner.login);
                                    $("#"+id+" span.author-name").text(data.owner.login);
                                    $("#"+id+" p.project-description").text(data.description);
                  }
                });
}