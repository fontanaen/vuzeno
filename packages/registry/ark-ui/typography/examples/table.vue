<script setup lang="ts">
import { Typography } from "@vuzeno/registry/ui/typography";
</script>

<template>
  <Typography.TableContainer>
    <Typography.Table>
      <thead>
        <Typography.TableRow>
          <Typography.TableHead>King's Treasury</Typography.TableHead>
          <Typography.TableHead>People's happiness</Typography.TableHead>
        </Typography.TableRow>
      </thead>
      <tbody>
        <Typography.TableRow>
          <Typography.TableCell>Empty</Typography.TableCell>
          <Typography.TableCell>Overflowing</Typography.TableCell>
        </Typography.TableRow>
        <Typography.TableRow>
          <Typography.TableCell>Modest</Typography.TableCell>
          <Typography.TableCell>Satisfied</Typography.TableCell>
        </Typography.TableRow>
        <Typography.TableRow>
          <Typography.TableCell>Full</Typography.TableCell>
          <Typography.TableCell>Ecstatic</Typography.TableCell>
        </Typography.TableRow>
      </tbody>
    </Typography.Table>
  </Typography.TableContainer>
</template>
