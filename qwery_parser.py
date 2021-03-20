from bs4 import BeautifulSoup
import requests


def parse_habrahabr(search):
    res = []
    page = requests.get("https://habr.com/ru/search/", params={"q": search})
    html = BeautifulSoup(page.text, "html.parser")
    for link in html.findAll("article", attrs={"class": 'post post_preview'}):
        tags = []
        for tag in link.findAll(attrs={"class": "inline-list__item-link hub-link"}):
            tags.append(tag.text)

        res.append({"link": link.find("a", attrs={"class": 'post__title_link'}).get("href"),
                    "title": link.find("a", attrs={"class": 'post__title_link'}).text,
                    "text": link.find(attrs={"class": 'post__text-html'}).get_text().replace("...", "").strip(),
                    "tags": tags,
                    "author": link.find("span", attrs={"class": 'user-info__nickname user-info__nickname_small'}).text})

    return res


def parse_stackoverflow(search):
    res = []
    page = requests.get("https://api.stackexchange.com/2.2/search/advanced",
                        params={"order": "desc", "sort": "activity", "q": search, "site": "stackoverflow"})
    for item in page.json()['items']:
        res.append({"link": item['link'],
                    "title": item['title'],
                    "view_count": item['view_count'],
                    "answer_count": item['answer_count'],
                    "score": item['score'],
                    "tags": item['tags']})
    return res


def parse_toaster(search):
    res = []
    page = requests.get("https://toster.ru/search",
                        params={"q": search})
    html = BeautifulSoup(page.text, "html.parser")
    for link in html.findAll("div", attrs={"class": "question__content_fluid"}):
        res.append(
            {"link": link.find("a", attrs={"class": "question__title-link question__title-link_list"}).get("href"),
             "title": link.find("a", attrs={"class": "question__title-link question__title-link_list"}).text})

    return res


def parse_google(search):
    res = []
    url = "https://google-search3.p.rapidapi.com/api/v1/search/q=" + search.replace(" ", "+") + "&num=25"

    headers = {
        'x-rapidapi-key': "a18a302019msh0b0737751faf28ep1608a1jsnae0b2af83904",
        'x-rapidapi-host': "google-search3.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)

    res_json = response.json()

    for item in res_json["results"]:
        res.append({"title": item["title"],
                    "link": item["link"],
                    "description": item["description"]})

    return res
