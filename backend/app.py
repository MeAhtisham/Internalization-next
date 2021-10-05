from __future__ import unicode_literals
from http.server import HTTPServer,BaseHTTPRequestHandler
from sys import path;
import youtube_dl
import os;
from urllib.parse import urlparse,parse_qs
import json
import subprocess
from subprocess import PIPE, Popen
from urllib.request import Request, urlopen
import urllib.request

def cmdline(command):
    process = Popen(
        args=command,
        stdout=PIPE,
        shell=True
    )
    return process.communicate()[0]

class echoHandler(BaseHTTPRequestHandler):
    
    def do_GET(self):
        url_parsed = urlparse(self.path);
        if(url_parsed.path == "/"):
            self.send_response(200)
            self.send_header('content-type','text/html')
            self.end_headers()
            self.wfile.write('Hello Worldw'.encode())
        elif url_parsed.netloc == "videoInfo":
            self.video_info(url_parsed)
        elif url_parsed.netloc == "download":
            self.video_download(url_parsed)
        elif url_parsed.netloc == "downloadImage":
            self.video_download_image(url_parsed)

    def video_info(self,url_parsed):
        parsed_query = parse_qs(url_parsed.query);
        video_url = "youtube-dl -j "+parsed_query['video_url'][0];
        info = cmdline(video_url)
        self.send_response(200)
        self.send_header('content-type','application/json')
        self.end_headers()
        self.wfile.write(info)
    
    def video_download(self,url_parsed):
        parsed_query = parse_qs(url_parsed.query);
        video_url = url_parsed.query.split('video_url=')[1]
        filename = parsed_query['filename'][0];
        filesize = parsed_query['filesize'][0];
        response = urllib.request.urlopen(video_url)
        info = response.info()
        self.send_response(200)
        self.send_header('content-type',info.get_content_type())

        if filesize != "null":
            self.send_header('Content-Length',filesize)

        self.send_header('Content-Disposition','attachment; filename="'+filename+'"')
        self.end_headers()
        self.wfile.write(response.read())
    
    def video_download_image(self,url_parsed):
        self.send_response(200)
        self.send_header('content-type','text/html')
        self.end_headers()
        self.wfile.write('Video Image'.encode())
        
def main():
    PORT=8000
    server = HTTPServer(('',PORT),echoHandler)
    print('Server running on port %s'%PORT)
    server.serve_forever()
if __name__ == '__main__':
    main()