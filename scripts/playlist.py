import sys, json
from pytube import Playlist
from pytube import YouTube

def read_in():
	lines = sys.stdin.readlines()
	return json.loads(lines[0])

def main():
	link = str(read_in())

	playlist = Playlist(link)
	for video in playlist:
		YouTube(video).streams.get_highest_resolution().download()

if __name__ == '__main__':
	main()