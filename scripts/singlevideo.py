import sys, json
from pytube import YouTube

def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    link = str(read_in())

    # dOWNLOAD VIDEO
    YouTube(link).streams.get_highest_resolution().download()

    #return the sum to the output stream
    # print total_sum_inArray

# Start process
if __name__ == '__main__':
    main()
