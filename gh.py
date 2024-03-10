i=0+1
with  open('cat.txt', 'a', encoding='utf-8') as file:
    while True:
        file.write(1 * i)
with open('cat.txt', 'r', encoding='utf-8') as file:
    data=file.read()
    print(data)