import sys
import json
import time
from pytube import YouTube


def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])


def main():
    # get our data as an array from read_in()
    link = str(read_in())

    folderName = time.strftime('%Y%m%d%H%M%S')
    folderPath = "C:\\Users\\Begin Again\\Videos\\YoutubeDownloader\\"

    # dOWNLOAD VIDEO
    YouTube(link).streams.get_highest_resolution().download(
        folderPath + str(folderName))
    print('downloaded')


# Start process
if __name__ == '__main__':
    main()
