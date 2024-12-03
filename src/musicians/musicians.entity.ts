import { BandMember } from 'src/bandmembers/bandmembers.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('musicians')
export class Musician {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ default: true })
  isSolo: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  instruments: string[];

  @OneToMany(() => BandMember, (bandMember) => bandMember.musician, {
    cascade: true,
  })
  bands: BandMember[];
}
