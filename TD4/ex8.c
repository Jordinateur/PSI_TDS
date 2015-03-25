#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define CHUNK 1024
int main(int argc, char* argv[]){
	FILE * src_file;
	FILE * dest_file;
	char buffer[CHUNK];
	size_t nread;
	dest_file = fopen(argv[2], "w");
	src_file = fopen(argv[1], "r");
	if(src_file && dest_file){
		while((nread = fread(buffer, 1, sizeof buffer, src_file)) > 0){
			fwrite(buffer, 1, nread, stdout);
			fwrite(buffer, 1, nread, dest_file);
		}
		fclose(src_file);
		fclose(dest_file);
	}else{
		printf("Le fichier %s n est pas lisible ou le fichier %s n'est pas modifiable\n", argv[1],argv[2]);
	}

}
