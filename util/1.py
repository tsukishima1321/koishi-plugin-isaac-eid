'''<div class="checkbox-group list-group"><div class="list-group-item"><input
            type="checkbox" checked="true" value="1"><span
            title="1">1</span></div><div class="list-group-item"><input
            type="checkbox" checked="true" value="2"><span
            title="2">2</span></div><div class="list-group-item"><input
            type="checkbox" checked="true" value="3"><span
            title="3">3</span></div><div class="list-group-item"><input
            type="checkbox" checked="true" value="4"><span
            title="4">4</span></div><div class="list-group-item"><input
            type="checkbox" checked="true" value="5"><span
            title="5">5</span></div></div>'''

import bs4 as bs
# get all the values of the checkboxes
soup = bs.BeautifulSoup(open(r"D:\Develop\koishi\koishi-app\external\isaac-eid\res\1.html"), 'html.parser')
checkboxes = soup.find_all('input', type='checkbox')
values = [checkbox['value'] for checkbox in checkboxes]
with open(r"D:\Develop\koishi\koishi-app\external\isaac-eid\res\1.txt", 'w') as f:
    f.write(f"{values}")
