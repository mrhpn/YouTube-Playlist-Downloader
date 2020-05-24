import sys, json
from pytube import Playlist
from pytube import YouTube
from collections import Counter
import time

def read_in():
	lines = sys.stdin.readlines()
	return json.loads(lines[0])

def main():
	link = str(read_in())

	playlist = Playlist(link)

	foldername = time.strftime('%Y%m%d%H%M%S')

	# count = 0
	# x = Counter(playlist)
	# for i in x.elements():
	# 	count += 1
	# count = str(count)

	for index, video in enumerate(playlist):
		YouTube(video).streams.get_highest_resolution().download('C:\\Users\\Begin Again\\Videos\\YoutubeDownloader\\' + str(foldername))
	
	print('downloaded')


if __name__ == '__main__':
	main()