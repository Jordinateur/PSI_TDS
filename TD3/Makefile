CC=gcc

cli_prog : cli.o networking.o parser.o utils.o
	$(CC) $^ -o cli_prog

windowed_prog : graphics.o interface.o networking.o parser.o utils.o windowed.o
	$(CC) $^ -o windowed_prog

cli.o : cli.c networking.h utils.h parser.h
	$(CC) $^ -c

networking.o : networking.c utils.h
	$(CC) $^ -c

clean:
	rm -rf *.o
