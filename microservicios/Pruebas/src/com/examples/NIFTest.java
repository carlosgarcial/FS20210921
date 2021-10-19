package com.examples;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

class NIFTest {
	
	NIF nif;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}
	
	@Test
	void groupNIFtest() {
		 assertAll("nif",
				()->assertTrue(nif.validarNif("28978236F"), "NIFValido"),
				()->assertFalse(nif.validarNif("28978236C"), "NIFInvalido"),
				()->assertFalse(nif.validarNif(""), "NIFVacio"),
				()->assertFalse(nif.validarNif("55"), "Formato incorrecto"),
				()->assertThrows(Exception.class, () -> nif.validarNif(null))
		);
	}


	
	

	

}
