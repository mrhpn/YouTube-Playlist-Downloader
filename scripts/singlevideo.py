import sys, json
from pytube import YouTube
import time

def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    link = str(read_in())

    foldername = time.strftime('%Y%m%d%H%M%S')

    # dOWNLOAD VIDEO
    YouTube(link).streams.get_highest_resolution().download('C:\\Users\\Begin Again\\Videos\\YoutubeDownloader\\' + str(foldername))
    print('downloaded')

# Start process
if __name__ == '__main__':
    main()
